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
    <section id='projects' className="w-full px-8 md:px-16 lg:px-24 py-16 lg:py-32 relative">
      <motion.h2 
        className="text-2xl text-gray-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projetos Desenvolvidos
      </motion.h2>

      <div className="w-full">
        {projectsData.map((project) => (
          <motion.div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
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
                {project.technologies.slice(0, 3).map(tech => (
                  <div key={tech} className="bg-gray-800 p-2 rounded-full text-gray-400 border border-gray-700">
                    {getListIcon(tech)}
                  </div>
                ))}
              </div>
              <ArrowUpRight className="text-gray-500 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-400" size={32} />
            </div>
          </motion.div>
        ))}
        <div className="border-t border-gray-700"></div>
      </div>

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