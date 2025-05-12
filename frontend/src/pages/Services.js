import React from 'react';
import { motion } from 'framer-motion';
import { FaPen, FaFilm, FaChartLine, FaUsers, FaVideo, FaLaptop, FaMicrophone, FaGraduationCap } from 'react-icons/fa';

// Components
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';

// Images from vision expert
const heroImage = 'https://images.unsplash.com/photo-1571232151946-f7f00c61ade7'; // Script image for hero
const scriptImage = 'https://images.unsplash.com/photo-1571232151946-f7f00c61ade7'; // Screenwriting
const directorImage = 'https://images.unsplash.com/photo-1495131796982-281014f71fbd'; // Director working with actors
const cameraImage = 'https://images.unsplash.com/photo-1576280314550-773c50583407'; // Cinematography
const editingImage = 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61'; // Editing
const marketingImage = 'https://images.unsplash.com/photo-1485846234645-a62644f84728'; // Film marketing
const equipmentImage = 'https://images.unsplash.com/photo-1520904452068-9903562979c8'; // Professional cinema equipment

const Services = () => {
  const services = [
    {
      id: 1,
      category: 'Сценарное мастерство',
      title: 'Сценарии',
      description: 'Создание оригинальных сценариев для фильмов, сериалов и рекламы.',
      features: [
        'Написание с нуля по вашему брифу',
        'Адаптация литературных произведений',
        'Доработка и редактирование существующих сценариев',
        'Консультации по драматургии и структуре',
        'Создание диалогов и персонажей'
      ],
      icon: <FaPen size={36} />,
      image: scriptImage
    },
    {
      id: 2,
      category: 'Режиссура',
      title: 'Постановка',
      description: 'Полное режиссерское сопровождение вашего проекта.',
      features: [
        'Разработка режиссерского сценария',
        'Создание раскадровок и планирование сцен',
        'Работа с актерами и проведение репетиций',
        'Блокинг и постановка мизансцен',
        'Контроль творческого процесса на съемочной площадке'
      ],
      icon: <FaFilm size={36} />,
      image: directorImage
    },
    {
      id: 3,
      category: 'Операторская работа',
      title: 'Съемка',
      description: 'Профессиональная кинематография для вашего проекта.',
      features: [
        'Выбор визуальной концепции и стиля',
        'Подбор оптимальной съемочной техники',
        'Построение освещения любой сложности',
        'Съемка на ARRI, RED, Sony, Blackmagic и др.',
        'Операторские решения для сложных сцен'
      ],
      icon: <FaVideo size={36} />,
      image: cameraImage
    },
    {
      id: 4,
      category: 'Постпродакшн',
      title: 'Монтаж и обработка',
      description: 'Полный цикл постпродакшн работ для вашего проекта.',
      features: [
        'Монтаж и сборка финального проекта',
        'Цветокоррекция и грейдинг',
        'Создание и интеграция визуальных эффектов',
        'Звуковое оформление и саунд-дизайн',
        'Финальное мастеринг и подготовка для дистрибуции'
      ],
      icon: <FaLaptop size={36} />,
      image: editingImage
    },
    {
      id: 5,
      category: 'Продюсирование',
      title: 'Управление проектами',
      description: 'Организация и управление всеми этапами производства.',
      features: [
        'Разработка бюджета и календарного плана',
        'Подбор съемочной группы и кастинг',
        'Организация локаций и продакшн-сервиса',
        'Логистика и решение технических вопросов',
        'Взаимодействие со всеми департаментами на площадке'
      ],
      icon: <FaUsers size={36} />,
      image: equipmentImage
    },
    {
      id: 6,
      category: 'Маркетинг',
      title: 'Продвижение',
      description: 'Стратегии продвижения и маркетинг вашего проекта.',
      features: [
        'Разработка тизеров и трейлеров',
        'Создание постеров и промо-материалов',
        'Подготовка питчей и презентаций для инвесторов',
        'Стратегии продвижения в соцсетях',
        'Подготовка к фестивалям и прокату'
      ],
      icon: <FaChartLine size={36} />,
      image: marketingImage
    },
    {
      id: 7,
      category: 'Звуковое оформление',
      title: 'Звук',
      description: 'Профессиональная работа со звуком для вашего проекта.',
      features: [
        'Запись чистового звука на площадке',
        'Озвучание и дубляж',
        'Звуковой дизайн и создание атмосферы',
        'Запись и подбор музыки',
        'Финальное сведение и мастеринг'
      ],
      icon: <FaMicrophone size={36} />,
      image: cameraImage
    },
    {
      id: 8,
      category: 'Обучение',
      title: 'Консультации и мастер-классы',
      description: 'Образовательные программы для кинематографистов.',
      features: [
        'Индивидуальные консультации',
        'Мастер-классы по режиссуре и операторскому мастерству',
        'Воркшопы по сценарному мастерству',
        'Практические занятия по монтажу',
        'Разбор вашего проекта экспертами'
      ],
      icon: <FaGraduationCap size={36} />,
      image: directorImage
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
        title="Полный спектр услуг кинопроизводства"
        subtitle="От идеи и сценария до продвижения готового фильма"
        ctaText="Обсудить проект"
        ctaLink="/contact"
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <SectionHeading 
            title="Наши услуги"
            subtitle="Мы сопровождаем кинопроекты на всех этапах производства, обеспечивая высокое качество реализации"
            center={true}
          />

          <div className="mt-16 space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="text-red-500 mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-red-500 text-sm font-medium mb-1">{service.category}</p>
                      <h3 className="heading-md">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="text-red-500 w-5 h-5 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <div className="rounded-xl overflow-hidden">
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="heading-lg text-white mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Не нашли нужную услугу?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Мы предлагаем индивидуальный подход к каждому проекту. 
            Свяжитесь с нами, чтобы обсудить ваши потребности.
          </motion.p>
          
          <motion.a 
            href="/contact" 
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Свяжитесь с нами
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
