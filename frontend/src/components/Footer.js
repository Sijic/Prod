import React from 'react';
import { Link } from 'react-router-dom'; // Link используется для внутренних навигационных ссылок
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaInstagram, FaYoutube, FaVk } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // URL к вашим юридическим документам на сайте
  // Предполагаем, что ваш сайт доступен по https://sklad.productions/
  // и файлы лежат в docs/legal/ относительно корня публикуемой папки
  const privacyPolicyUrl = "/legal/Privacy-Policy-Sklad-Productions.pdf";
  const termsOfServiceUrl = "/legal/Terms-of-Service-Sklad-Productions.pdf";

  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="bg-black border-t border-gray-800 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <motion.div variants={item} className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl md:text-3xl font-bold">
                SKLAD.<span className="text-red-600">PRODUCTION</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Универсальный киноассистент и консультант продакшн-компании. Мы предоставляем услуги по написанию сценариев, режиссуре, продюсированию и продвижению проектов.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/artelcinema" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTelegramPlane size={22} />
              </a>
              <a href="https://instagram.com/sklad.productions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.youtube.com/@SkladProductions" /* ИЗМЕНИТЕ НА ВАШ РЕАЛЬНЫЙ YOUTUBE URL */ target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={22} />
              </a>
              <a href="https://vk.com/sijicbond" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaVk size={22} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Проекты</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-6">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: <a href="mailto:info@sklad.productions" className="hover:text-white transition-colors">info@sklad.productions</a></li>
              <li>Телефон: <a href="tel:+77768006262" className="hover:text-white transition-colors">+7 776 800 6262</a></li>
              <li>Адрес: Алматы, Казахстан</li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={item} className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} SKLAD.PRODUCTION. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            {/* --- НАЧАЛО ИЗМЕНЕНИЙ ДЛЯ ССЫЛОК НА ДОКУМЕНТЫ --- */}
            <a 
              href={privacyPolicyUrl} 
              target="_blank" // Открывать в новой вкладке
              rel="noopener noreferrer" // Для безопасности при открытии в новой вкладке
              download="Privacy-Policy-Sklad-Productions.pdf" // Предлагаемое имя файла для скачивания
              className="hover:text-white transition-colors mr-6"
            >
              Политика конфиденциальности
            </a>
            <a 
              href={termsOfServiceUrl} 
              target="_blank"
              rel="noopener noreferrer"
              download="Terms-of-Service-Sklad-Productions.pdf" // Предлагаемое имя файла для скачивания
              className="hover:text-white transition-colors"
            >
              Условия использования
            </a>
            {/* --- КОНЕЦ ИЗМЕНЕНИЙ ДЛЯ ССЫЛОК НА ДОКУМЕНТЫ --- */}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;