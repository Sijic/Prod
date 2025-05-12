import requests
import sys
import uuid
from datetime import datetime

class SkladAPITester:
    def __init__(self, base_url="https://5cec2aa3-7b37-479e-9e5c-50e8100703c9.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.text:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                if response.text:
                    try:
                        print(f"Error Response: {response.json()}")
                    except:
                        print(f"Error Response: {response.text}")

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root Endpoint",
            "GET",
            "",
            200
        )

    def test_create_status_check(self, client_name):
        """Test creating a status check"""
        return self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data={"client_name": client_name}
        )

    def test_get_status_checks(self):
        """Test getting all status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )

def main():
    # Setup
    tester = SkladAPITester()
    test_client = f"test_client_{uuid.uuid4()}"

    # Run tests
    print("\n🚀 Starting API Tests for SKLAD.PRODUCTION Backend\n")
    
    # Test root endpoint
    tester.test_root_endpoint()
    
    # Test status check endpoints
    success, response = tester.test_create_status_check(test_client)
    if success:
        print(f"Successfully created status check with ID: {response.get('id', 'unknown')}")
    
    tester.test_get_status_checks()

    # Print results
    print(f"\n📊 Tests Summary: {tester.tests_passed}/{tester.tests_run} tests passed")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())