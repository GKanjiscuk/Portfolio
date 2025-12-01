import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Database, Layout, Server, Code2 } from 'lucide-react';

import { ProjectModal, type Project } from './ProjectsModal'; 
import projectsRaw from '../data/projects.json';

const projectsData = projectsRaw as Project[];

const getListIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('sql') || t.includes('mongo')) return <Database size={16} />;
  if (t.includes('react') || t.includes('html')) return <Layout size={16} />;
  if (t.includes('java') || t.includes('spring')) return <Server size={16} />;
  return <Code2 size={16} />;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='projects' className="w-full px-4 md:px-16 lg:px-24 py-16 lg:py-32 relative">
      {/* Cabeçalho da Seção */}
      <motion.div 
        className="flex items-end justify-between mb-12 px-2 md:px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl text-gray-400">
          Projetos Desenvolvidos
        </h2>
        <span className="text-xs text-gray-600 uppercase tracking-widest hidden md:block">
          Clique para ver detalhes
        </span>
      </motion.div>

      {/* Lista de Projetos */}
      <div className="w-full flex flex-col gap-3">
        {projectsData.map((project) => (
          <motion.div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="w-full border-t border-gray-800/50 py-8 px-4 md:px-8 flex justify-between items-center group cursor-pointer hover:bg-gray-800/40 transition-all duration-300 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Informações do Projeto */}
            <div className="flex flex-col z-10 max-w-[70%]">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-200 group-hover:text-orange-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm md:text-md text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">
                {project.subtitle}
              </p>
            </div>
            
            {/* Ícones e Botão de Ação */}
            <div className="hidden md:flex items-center gap-6 z-10">
              {/* Texto "Ver Detalhes" (Animação no Hover) */}
              <div className="overflow-hidden h-6 flex items-center justify-end">
                <span className="text-sm font-medium text-orange-400 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 block">
                  Ver detalhes
                </span>
              </div>

              {/* Tecnologias */}
              <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {project.technologies.slice(0, 3).map(tech => (
                  <div 
                    key={tech} 
                    className="bg-gray-900/50 p-2 rounded-full text-gray-400 border border-gray-700/50 group-hover:border-orange-500/30 transition-colors"
                  >
                    {getListIcon(tech)}
                  </div>
                ))}
              </div>
              
              {/* Seta / Botão */}
              <div className="bg-gray-800/80 p-3 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-transparent group-hover:shadow-orange-900/20">
                <ArrowUpRight 
                  className="text-gray-400 group-hover:text-white transform transition-transform duration-300 group-hover:rotate-45" 
                  size={24} 
                />
              </div>
            </div>

            {/* Seta simples para Mobile (aparece quando a div de cima está oculta) */}
            <div className="md:hidden text-gray-600 group-hover:text-orange-400 transition-colors">
               <ArrowUpRight size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};