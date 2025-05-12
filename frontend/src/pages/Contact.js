import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaInstagram, FaYoutube, FaVk } from 'react-icons/fa';

// Components
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

// Images from vision expert
const heroImage = 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61'; // Post-production image for hero

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaPhoneAlt size={20} />,
      title: 'Телефон',
      details: ['+7 701 765 4321']
    },
    {
      id: 2,
      icon: <FaEnvelope size={20} />,
      title: 'Email',
      details: ['info@sklad.production', 'support@sklad.production']
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Адрес',
      details: ['Алматы, Казахстан', 'ул. Достык 123, офис 45']
    }
  ];

  const socialLinks = [
    { id: 1, icon: <FaTelegramPlane size={22} />, url: 'https://t.me/artelcinema', label: 'Telegram' },
    { id: 2, icon: <FaInstagram size={22} />, url: 'https://instagram.com', label: 'Instagram' },
    { id: 3, icon: <FaYoutube size={22} />, url: 'https://youtube.com', label: 'YouTube' },
    { id: 4, icon: <FaVk size={22} />, url: 'https://vk.com', label: 'VK' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection 
        title="Свяжитесь с нами"
        subtitle="Мы готовы ответить на ваши вопросы и обсудить потенциальное сотрудничество"
        ctaText="Написать нам"
        ctaLink="#contact-form"
        backgroundImage={heroImage}
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-black" id="contact-form">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Давайте обсудим ваш проект</h2>
              <p className="text-gray-300 text-lg mb-8">
                Заполните форму, и мы свяжемся с вами, чтобы обсудить детали вашего проекта и ответить на все вопросы.
              </p>
              
              <div className="space-y-8 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-zinc-900 relative">
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.918302969231!2d76.94397207720598!3d43.23992787123411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb14cac9fe1%3A0x4a748240ae35b9fb!2z0YPQu9C40YbQsCDQlNC-0YHRgtGL0LosINCQ0LvQvNCw0YLRiw!5e0!3m2!1sru!2skz!4v1714497635319!5m2!1sru!2skz" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen=""
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SKLAD.PRODUCTION на карте"
        ></iframe>
      </section>
    </motion.div>
  );
};

export default Contact;
