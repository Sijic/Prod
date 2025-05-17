import React from 'react';
import { motion } from 'framer-motion';
import { FaPen, FaFilm, FaChartLine, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Components
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import VideoSection from '../components/VideoSection';

// Images from vision expert
const heroImage = '/Film_Set_Loop_Video_Ready.gif'; // Film set with dark mood
const scriptImage = 'https://images.unsplash.com/photo-1571232151946-f7f00c61ade7'; // Screenwriting
const directorImage = 'https://images.unsplash.com/photo-1495131796982-281014f71fbd'; // Director working with actors
const marketingImage = 'https://images.unsplash.com/photo-1485846234645-a62644f84728'; // Film marketing
const equipmentImage = 'https://images.unsplash.com/photo-1520904452068-9903562979c8'; // Professional cinema equipment

// Sample data for services
const services = [
  {
    id: 1,
    title: 'Написание сценариев',
    description: 'Создание оригинальных сценариев, доработка существующих, консультации по драматургии и структуре.',
    icon: <FaPen size={24} />,
    image: scriptImage
  },
  {
    id: 2,
    title: 'Режиссура',
    description: 'Постановка фильмов, работа с актерами, раскадровки, блокинг, планирование съемок.',
    icon: <FaFilm size={24} />,
    image: directorImage
  },
  {
    id: 3,
    title: 'Продюсирование',
    description: 'Бюджетирование, календарное планирование, логистика, подбор команды и локаций.',
    icon: <FaUsers size={24} />,
    image: equipmentImage
  },
  {
    id: 4,
    title: 'Маркетинг',
    description: 'Разработка стратегий продвижения, создание трейлеров, постеров, питчинг проектов.',
    icon: <FaChartLine size={24} />,
    image: marketingImage
  }
];

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    quote: 'SKLAD.PRODUCTION полностью преобразили наш сценарий. Их подход к драматургии и структуре сделал историю намного сильнее и эмоциональнее.',
    name: 'Алексей Караваев',
    position: 'Продюсер, "Новый Горизонт"',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    quote: 'Съемки с командой Сергея были невероятно профессиональными. Особенно впечатлило внимание к деталям и умение работать с актерами.',
    name: 'Мария Листова',
    position: 'Актриса',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    quote: 'Благодаря SKLAD.PRODUCTION наш фильм получил отличные отзывы и был выбран для показа на трех фестивалях. Их маркетинговая стратегия сработала безупречно.',
    name: 'Дмитрий Соколов',
    position: 'Режиссер, "Время тишины"',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
  }
];

const Home = () => {
  // Example YouTube video URL for demo
  const demoVideoUrl = "https://www.youtube.com/embed/XKSI4LNCTBs?autoplay=1";
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection 
        title="Видео продакшн сервис  -где всё на своих местах"
        subtitle="Мы помогаем создавать качественные фильмы, сериалы и видеоконтент на всех этапах производства"
        ctaText="Начать сотрудничество"
        ctaLink="/contact"
        backgroundImage={heroImage}
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <SectionHeading 
            title="Наши услуги"
            subtitle="Мы предоставляем полный спектр услуг по созданию и продвижению кино- и видеопроектов"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                title="О SKLAD.PRODUCTION"
                subtitle=""
                light={true}
              />
              
              <p className="text-gray-300 mb-6">
                Мы — команда профессионалов киноиндустрии с богатым опытом создания фильмов, сериалов и рекламных проектов. Наша миссия — помогать кинематографистам на всех этапах создания качественного контента.
              </p>
              
              <p className="text-gray-300 mb-6">
                Сергей Бондарев, основатель SKLAD.PRODUCTION, имеет обширный опыт в режиссуре, операторской работе и продюсировании. Под его руководством наша команда помогла реализовать десятки успешных проектов.
              </p>
              
              <div className="mt-8">
                <Link to="/about" className="btn-outline">
                  Узнать больше
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <VideoSection 
                thumbnailImage="https://images.unsplash.com/photo-1576280314550-773c50583407"
                videoUrl={demoVideoUrl}
                title="О нашей компании"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1607112812619-182cb1c7bb61" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Отзывы клиентов"
            subtitle="Что говорят о нас те, кто уже работал с нами"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Готовы начать работу над вашим проектом?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Свяжитесь с нами для консультации и обсуждения вашей идеи.
              Мы поможем воплотить ее в качественный кинопродукт.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact" className="bg-white text-red-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Связаться с нами
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
