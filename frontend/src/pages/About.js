import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTrophy, FaUserFriends, FaFilm } from 'react-icons/fa';

// Components
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import VideoSection from '../components/VideoSection';

// Images from vision expert
const heroImage = 'https://images.unsplash.com/photo-1495131796982-281014f71fbd'; // Director image for hero
const directorImage = 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676'; // Team image

const About = () => {
  // Example YouTube video URL for demo
  const demoVideoUrl = "https://www.youtube.com/embed/XKSI4LNCTBs?autoplay=1";
  
  const stats = [
    { id: 1, value: '15+', label: 'Лет опыта', icon: <FaCheck /> },
    { id: 2, value: '50+', label: 'Реализованных проектов', icon: <FaFilm /> },
    { id: 3, value: '12', label: 'Наград и номинаций', icon: <FaTrophy /> },
    { id: 4, value: '30+', label: 'Довольных клиентов', icon: <FaUserFriends /> }
  ];
  
  const team = [
    { 
      id: 1, 
      name: 'Сергей Бондарев', 
      position: 'Основатель, Режиссер, Оператор', 
      bio: 'Профессионал с более чем 15-летним опытом в кино- и телепроизводстве. Работал над художественными фильмами, сериалами и рекламными проектами. Сергей сочетает творческое видение с техническим мастерством.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 2, 
      name: 'Мария Листова', 
      position: 'Продюсер', 
      bio: 'Опытный продюсер с большим опытом организации съемочного процесса. Мария отвечает за планирование, бюджетирование и координацию всех этапов производства, обеспечивая эффективную работу команды.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 3, 
      name: 'Александр Ким', 
      position: 'Сценарист, Режиссёр', 
      bio: 'Талантливый сценарист и режиссер с уникальным стилем повествования. Александр создает захватывающие истории и помогает клиентам находить наиболее эффективные способы передачи их идей через визуальные образы.',
      image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    { 
      id: 4, 
      name: 'Динара Сатбаева', 
      position: 'Маркетолог', 
      bio: 'Специалист по продвижению кино- и видеоконтента. Динара разрабатывает эффективные стратегии продвижения проектов в социальных сетях, на стриминговых платформах и в традиционных медиа.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection 
        title="О нас"
        subtitle="Наша миссия - помогать создавать качественный и впечатляющий кино- и видеоконтент"
        ctaText="Наши услуги"
        ctaLink="/services"
        backgroundImage={heroImage}
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                title="Наша история"
                subtitle=""
                light={true}
              />
              
              <p className="text-gray-300 mb-6">
                SKLAD.PRODUCTION была основана Сергеем Бондаревым, профессионалом киноиндустрии с более чем 15-летним опытом работы в качестве режиссера, оператора и продюсера.
              </p>
              
              <p className="text-gray-300 mb-6">
                За годы работы мы создали десятки успешных проектов, от художественных фильмов и сериалов до рекламных роликов и музыкальных клипов. Наша цель — предоставлять клиентам полный спектр услуг по созданию качественного видеоконтента.
              </p>

              <p className="text-gray-300 mb-6">
                Мы гордимся тем, что сотрудничаем с талантливыми кинематографистами и помогаем им реализовывать их творческий потенциал. Наша команда состоит из профессионалов, каждый из которых является экспертом в своей области.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <VideoSection 
                thumbnailImage={directorImage}
                videoUrl={demoVideoUrl}
                title="История SKLAD.PRODUCTION"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <SectionHeading 
            title="Наша команда"
            subtitle="Талантливые профессионалы, создающие качественный контент"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-zinc-900 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-red-500 text-sm mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1576280314550-773c50583407" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <SectionHeading 
            title="Наша миссия и ценности"
            subtitle=""
            center={true}
            light={true}
          />
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Наша миссия — помогать кинематографистам и компаниям создавать качественный и впечатляющий визуальный контент, который находит отклик у аудитории и достигает поставленных целей.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="p-6 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Креативность</h3>
              <p className="text-gray-300">Мы ценим оригинальные идеи и нестандартные подходы, которые делают каждый проект уникальным.</p>
            </motion.div>
            
            <motion.div
              className="p-6 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Профессионализм</h3>
              <p className="text-gray-300">Мы стремимся к высочайшему качеству во всех аспектах работы, от сценария до постпродакшна.</p>
            </motion.div>
            
            <motion.div
              className="p-6 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Сотрудничество</h3>
              <p className="text-gray-300">Мы верим в силу командной работы и открытого диалога для достижения наилучших результатов.</p>
            </motion.div>
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
              Готовы начать сотрудничество?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь воплотить ваши идеи в жизнь.
            </motion.p>
            
            <motion.a 
              href="/contact" 
              className="bg-white text-red-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Связаться с нами
            </motion.a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
