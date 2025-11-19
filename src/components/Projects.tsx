import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  technologies: string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Plataforma de Gerenciamento de Tarefas - TaskManager',
    subtitle: 'Uma plataforma virtual completa com Java e React',
    technologies: ['React', 'Java', 'Spring Boot', 'MongoDB'],
    link: "https://github.com/GeneSys-fatec/API-3DSM",
  },
  {
    id: 2,
    title: 'Sistema de Dashboard Financeiro',
    subtitle: 'Aplicação para controle de finanças de empresas parceiras da plataforma',
    technologies: ['React', 'TypeScript', 'Next.JS', 'JavaScript', 'MySQL'],
    link: "https://github.com/ORBIS-2DSM-API/orbis-main",
  },
  {
    id: 3,
    title: 'DemoQuerycy - Plataforma de Dados dos Vereadores',
    subtitle: 'A plataforma apresenta dados sobre a atuação dos vereadores de São José dos Campos (mandato 2020-2024) de forma objetiva, visual e acessível',
    technologies: ['JavaScript', 'Python', 'HTML', 'CSS', 'MySQL']
    , link: "https://github.com/AgileKrakens/DemoQuerycy",
  },
];

export const Projects = () => {
  return (
    <section id='projects' className="w-full px-8 md:px-16 lg:px-24 py-16 lg:py-32">
      <motion.h2 
        className="text-2xl text-gray-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projetos Selecionados
      </motion.h2>

      <div className="w-full">
        {projectsData.map((project) => (
        
          <motion.a 
            key={project.id} 
            href={project.link}
            className="w-full border-t border-gray-700 py-8 flex justify-between items-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-200 group-hover:text-orange-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-md text-gray-500 mt-2">{project.subtitle}</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-2">
                {project.technologies.slice(0, 2).map(tech => (
                  <span key={tech} className="bg-gray-800 text-gray-400 text-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="text-gray-500 transform transition-transform duration-300 group-hover:rotate-45 group-hover:text-orange-400" size={32} />
            </div>
          </motion.a>
        ))}
        <div className="border-t border-gray-700"></div> {/* Linha final da lista */}
      </div>
    </section>
  );
};