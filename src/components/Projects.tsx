import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Uma biblioteca de ícones popular e leve. Vamos instalá-la!

// Passo 2.1: Definindo a estrutura de um projeto com TypeScript
type Project = {
  id: number;
  title: string;
  subtitle: string;
  technologies: string[];
};

// Passo 2.2: Criando os dados dos nossos projetos (substitua pelos seus)
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Plataforma E-commerce',
    subtitle: 'Uma loja virtual completa com Java e React',
    technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Sistema de Gerenciamento',
    subtitle: 'Aplicação para controle de estoque e finanças',
    technologies: ['React', 'Java', 'Spring Security', 'JWT', 'MySQL'],
  },
  {
    id: 3,
    title: 'Chat em Tempo Real',
    subtitle: 'Webapp de mensagens com WebSockets',
    technologies: ['React', 'Java', 'Spring WebFlux', 'WebSocket'],
  },
];

// --- Componente Projects Principal ---
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
          // Usamos 'a' para semântica, mas pode ser um Link do react-router depois
          <motion.a 
            key={project.id} 
            href="#" // TODO: Mudar para a página do projeto
            className="w-full border-t border-gray-700 py-8 flex justify-between items-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Anima apenas uma vez quando entra na tela
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
                {project.technologies.slice(0, 2).map(tech => ( // Mostra as 2 primeiras techs
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