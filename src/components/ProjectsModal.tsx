import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  X,
  Github,
  User,
  Cpu,
  Brain,
  Globe,
  Database,
  Server,
  Terminal,
  Lightbulb // NOVO ÍCONE
} from "lucide-react";

import { FaJava, FaDocker, FaAws, FaNodeJs } from "react-icons/fa";
import { 
  SiReact, 
  SiSpring, 
  SiSpringsecurity, 
  SiMongodb, 
  SiTypescript, 
  SiMysql, 
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFlask
} from "react-icons/si";

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  status: string;
  description: string;
  technologies: string[];
  contributions: string[];
  softSkills: { name: string; description: string }[];
  futureLearning?: string; // NOVO CAMPO OPCIONAL
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  const size = 24;




  if (t.includes("react")) 
    return <SiReact size={size} color="#61DAFB" />;
  

  if (t.includes("java") && !t.includes("script")) 
    return <FaJava size={size} color="#ED8B00" />;
  

  if (t.includes("security")) 
    return <SiSpringsecurity size={size} color="#6DB33F" />;


  if (t.includes("spring")) 
    return <SiSpring size={size} color="#6DB33F" />;
  

  if (t.includes("mongo")) 
    return <SiMongodb size={size} color="#47A248" />;
  

  if (t.includes("mysql") || t.includes("sql")) 
    return <SiMysql size={size} color="#4479A1" />;


  if (t.includes("type") || t.includes("ts")) 
    return <SiTypescript size={size} color="#3178C6" />;


  if (t.includes("node")) 
    return <FaNodeJs size={size} color="#339933" />;


  if (t.includes("next")) 
    return <SiNextdotjs size={size} color="#FFFFFF" />;


  if (t.includes("docker")) 
    return <FaDocker size={size} color="#2496ED" />;
  

  if (t.includes("aws") || t.includes("amazon")) 
    return <FaAws size={size} color="#FF9900" />;


  if (t.includes("python")) 
    return <SiPython size={size} color="#3776AB" />;


  if (t.includes("flask")) 
    return <SiFlask size={size} color="#FFFFFF" />;


  if (t.includes("html")) 
    return <SiHtml5 size={size} color="#E34F26" />;


  if (t.includes("css")) 
    return <SiCss3 size={size} color="#1572B6" />;


  if (t.includes("data")) return <Database size={size} className="text-gray-400" />;
  if (t.includes("api")) return <Server size={size} className="text-gray-400" />;
  
  return <Terminal size={size} className="text-gray-400" />;
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 border border-gray-700 w-full max-w-4xl rounded-xl shadow-2xl flex flex-col max-h-[85vh] outline-none"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex-none bg-gray-900/95 border-b border-gray-700 p-6 flex justify-between items-start rounded-t-xl z-10">
            <div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                  project.status === "Concluído"
                    ? "bg-green-900/50 text-green-400"
                    : "bg-yellow-900/50 text-yellow-400"
                }`}
              >
                {project.status}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mt-2">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Conteúdo Central */}
          <div 
            className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 overscroll-contain"
            data-lenis-prevent="true" 
          >
            {/* Descrição */}
            <div>
              <h4 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                <Globe size={18} /> Sobre o Projeto
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Grid Principal */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Coluna Esquerda: Contribuições */}
              <div className="md:col-span-2">
                <h4 className="text-orange-400 font-semibold mb-4 flex items-center gap-2">
                  <User size={18} /> Contribuições Pessoais
                </h4>
                <ul className="space-y-3">
                  {project.contributions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna Direita: Hard Skills (Ícones Novos) */}
              <div className="bg-gray-800/20 p-5 rounded-lg border border-gray-700/50 h-fit">
                <h4 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                  <Cpu size={18} /> Hard Skills
                </h4>
                <div className="flex flex-col gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg w-full hover:border-gray-500 transition-colors group"
                    >
                      {/* O ícone renderiza direto com a cor definida no switch lá em cima */}
                      <span className="flex-shrink-0 flex items-center justify-center filter drop-shadow-lg">
                        {getTechIcon(tech)}
                      </span>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                <Brain size={18} /> Soft Skills Desenvolvidas
              </h4>
              <div className="grid gap-4">
                {project.softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800/30 p-4 rounded-lg border-l-2 border-purple-500 hover:bg-gray-800/50 transition-colors"
                  >
                    <h5 className="text-gray-200 font-bold mb-1">
                      {skill.name}
                    </h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* NOVA SEÇÃO: Aprendizados e Futuro (Condicional) */}
            {project.futureLearning && (
              <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-700/50">
                <h4 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb size={18} /> Aprendizados e Considerações Futuras
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {project.futureLearning}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex-none p-6 border-t border-gray-700 bg-gray-900/50 backdrop-blur-lg rounded-b-xl">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-900/20"
            >
              <Github size={20} />
              Acessar Código Fonte
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};