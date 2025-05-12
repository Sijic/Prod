import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Components
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

// Images from vision expert 
const heroImage = 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676'; // Film crew for hero

const Projects = () => {
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'Все проекты' },
    { id: 'film', name: 'Фильмы' },
    { id: 'series', name: 'Сериалы' },
    { id: 'commercial', name: 'Реклама' },
    { id: 'music', name: 'Музыкальные клипы' }
  ];

  // Sample projects data based on Sergey Bondarev's portfolio
  const allProjects = [
    {
      id: 1,
      title: 'Воскресение',
      category: 'film',
      categoryName: 'Фильм',
      description: 'Полнометражный художественный фильм о человеке, получившем второй шанс в жизни.',
      image: 'https://images.unsplash.com/photo-1520904452068-9903562979c8',
      year: '2022'
    },
    {
      id: 2,
      title: 'В тени',
      category: 'series',
      categoryName: 'Сериал',
      description: 'Многосерийный триллер о работе специального отдела полиции.',
      image: 'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152',
      year: '2021'
    },
    {
      id: 3,
      title: 'Время перемен',
      category: 'film',
      categoryName: 'Фильм',
      description: 'Драма о преодолении жизненных трудностей и поиске своего пути.',
      image: 'https://images.unsplash.com/photo-1576280314550-773c50583407',
      year: '2023'
    },
    {
      id: 4,
      title: 'Новый Казахстан',
      category: 'commercial',
      categoryName: 'Реклама',
      description: 'Имиджевый ролик о развитии и потенциале современного Казахстана.',
      image: 'https://images.unsplash.com/photo-1495131796982-281014f71fbd',
      year: '2022'
    },
    {
      id: 5,
      title: 'Путь домой',
      category: 'music',
      categoryName: 'Музыкальный клип',
      description: 'Клип для известной рок-группы с глубоким символическим повествованием.',
      image: 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61',
      year: '2023'
    },
    {
      id: 6,
      title: 'Грани',
      category: 'series',
      categoryName: 'Сериал',
      description: 'Детективный сериал о работе психолога с преступниками.',
      image: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676',
      year: '2021'
    },
    {
      id: 7,
      title: 'Свобода',
      category: 'film',
      categoryName: 'Фильм',
      description: 'Историческая драма о борьбе за независимость.',
      image: 'https://images.unsplash.com/photo-1571232151946-f7f00c61ade7',
      year: '2020'
    },
    {
      id: 8,
      title: 'Бренд №1',
      category: 'commercial',
      categoryName: 'Реклама',
      description: 'Серия рекламных роликов для крупного национального бренда.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      year: '2023'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  // Filter projects based on category
  const filterProjects = (categoryId) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => project.category === categoryId);
      setFilteredProjects(filtered);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection 
        title="Наши проекты"
        subtitle="Креативные и высококачественные кино- и видеопроекты"
        ctaText="Начать свой проект"
        ctaLink="/contact"
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <SectionHeading 
            title="Портфолио работ"
            subtitle="Избранные проекты, над которыми мы работали как режиссеры, операторы, сценаристы и продюсеры"
            center={true}
          />
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => filterProjects(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id 
                    ? 'bg-red-600 text-white' 
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Проекты в этой категории не найдены</p>
            </div>
          )}
        </div>
      </section>

      {/* Collaboration CTA */}
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
              Хотите, чтобы мы работали над вашим проектом?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Мы открыты для сотрудничества и готовы помочь вам создать
              качественный кино- или видеопроект любой сложности.
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

export default Projects;
