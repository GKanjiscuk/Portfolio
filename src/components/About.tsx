import { motion } from "framer-motion";

import {
  SiSpring,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiExpress,
  SiSass,
  SiTailwindcss,
  SiMysql,
  SiFigma,
} from "react-icons/si";

// Adicionei o FaDownload aqui nas importações
import { FaJava, FaAws, FaDownload } from "react-icons/fa6";

const skills = [
  { name: 'Java', component: FaJava, colorClass: 'text-orange-500' },
  { name: 'Spring Boot', component: SiSpring, colorClass: 'text-green-500' },
  { name: 'React', component: SiReact, colorClass: 'text-sky-500' },
  { name: 'TypeScript', component: SiTypescript, colorClass: 'text-blue-600' },
  { name: 'Node.js', component: SiNodedotjs, colorClass: 'text-green-600' },
  { name: 'MongoDB Atlas', component: SiMongodb, colorClass: 'text-green-500' },
  { name: 'Docker', component: SiDocker, colorClass: 'text-blue-500' },
  { name: 'AWS', component: FaAws, colorClass: 'text-orange-400' },
  { name: 'HTML5', component: SiHtml5, colorClass: 'text-orange-600' },
  { name: 'CSS3', component: SiCss3, colorClass: 'text-blue-500' },
  { name: 'JavaScript', component: SiJavascript, colorClass: 'text-yellow-400' },
  { name: 'Python', component: SiPython, colorClass: 'text-blue-500' },
  { name: 'Express.js', component: SiExpress, colorClass: 'text-gray-400' },
  { name: 'Sass', component: SiSass, colorClass: 'text-pink-500' },
  { name: 'Tailwind CSS', component: SiTailwindcss, colorClass: 'text-teal-400' },
  { name: 'MySQL', component: SiMysql, colorClass: 'text-blue-700' },
  { name: 'Figma', component: SiFigma, colorClass: 'text-pink-600' },
];

const developedSkills = [
  { name: 'Java', component: FaJava, colorClass: 'text-orange-500' },
  { name: 'TypeScript', component: SiTypescript, colorClass: 'text-blue-600' },
  { name: 'Python', component: SiPython, colorClass: 'text-yellow-400' },
  { name: 'MongoDB', component: SiMongodb, colorClass: 'text-green-500' },
];

export const About = () => {
  return (
    <section
      id="about"
      className="w-full px-8 md:px-16 lg:px-24 py-16 lg:py-32 border-t border-gray-800"
    >
      <motion.h2
        className="text-2xl text-gray-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Sobre Mim
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start" // Mudei items-center para items-start para alinhar melhor com o botão
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="lg:col-span-2 text-gray-300 text-lg leading-relaxed">
          <p>
            Olá! Sou Giovanni Kanjiscuk, um desenvolvedor fullstack apaixonado
            por construir soluções robustas e criar interfaces de usuário
            intuitivas. Minha jornada na programação começou com meu interesse
            por games e informática, e desde então, venho me aprofundando em
            tecnologias modernas para transformar ideias complexas em realidade.
          </p>
          <p className="mt-4">
            Com uma base sólida em Java para o Backend e React para o Frontend,
            eu busco sempre a melhor performance, escalabilidade e experiência
            do usuário em cada projeto que desenvolvo. 
            
          </p>

          <p className="mt-4">Atualmente estou no curso de <b>Desenvolvimento de Software Multiplataforma - Fatec São José dos Campos</b>, onde tenho aprimorado minhas habilidades técnicas e colaborativas, estando aberto para novas oportunidades profissionais e desafios que me permitam crescer ainda mais na área de desenvolvimento.</p>


          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-200 mb-4">
              Minhas Habilidades:
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="relative group">
                  <div className="bg-gray-800 p-3 rounded-md transition-transform duration-300 group-hover:-translate-y-1">
                    <skill.component
                      className={`h-8 w-8 transition-colors duration-300 ${skill.colorClass}`}
                    />
                  </div>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            

            <div>
              <h3 className="text-xl font-bold text-gray-200 mb-4">
                Soft Skills Desenvolvidas:
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 text-gray-300">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Resolução de Problemas</li>
                  <li>Proatividade</li>
                </ul>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Adaptabilidade</li>
                  <li>Gerenciamento de Tempo</li>
                </ul>
              </div>
            </div>


            <div>
              <h3 className="text-xl font-bold text-gray-200 mb-4">
                Habilidades Efetivamente Desenvolvidas:
              </h3>
              <div className="flex flex-wrap gap-4">
                {developedSkills.map((skill) => (
                  <div key={skill.name} className="relative group">
                    <div className="bg-gray-800 p-3 rounded-md transition-transform duration-300 group-hover:-translate-y-1">
                      <skill.component
                        className={`h-8 w-8 transition-colors duration-300 ${skill.colorClass}`}
                      />
                    </div>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>


        <div className="lg:col-span-1 flex flex-col items-center lg:items-end gap-6">
          

          <div className="w-72 h-84 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/profile-photo.JPG"
              alt="Foto de Giovanni Kanjiscuk"
              className="w-full h-full object-cover object-top transition-all duration-300"
            />
          </div>


          <a
            href="/Curriculo-GiovanniKanjiscuk.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-72 text-lg text-orange-400 border border-orange-400 rounded-full px-8 py-3 hover:bg-orange-400 hover:text-gray-900 transition-all duration-300"
          >
            Baixar Currículo
            <FaDownload className="ml-2 text-sm group-hover:text-gray-900" />
          </a>

        </div>
      </motion.div>
    </section>
  );
};