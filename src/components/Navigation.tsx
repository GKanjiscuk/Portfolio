import { Mail } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

export const Navigation = () => {
  
  return (
    <nav className="hidden lg:flex fixed top-0 right-0 h-screen w-24 flex-col justify-between items-center py-8 border-l border-gray-800">

      <div className="flex flex-col gap-12 text-gray-500 font-bold">
        <a 
          href="#projects" 
          className="h-24 flex items-center justify-center transform -rotate-90 whitespace-nowrap tracking-widest hover:text-orange-400 transition-colors"
        >
          PROJETOS
        </a>
        <a 
          href="#about" 
          className="h-24 flex items-center justify-center transform -rotate-90 whitespace-nowrap tracking-widest hover:text-orange-400 transition-colors"
        >
          SOBRE
        </a>
      </div>

      <div className="flex flex-col gap-6">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=giovannikanjiscuk@gmail.com"
        target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
          <Mail size={24} />
        </a>
        <a href="https://github.com/giovannikanjiscuk" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
          <GithubIcon className="w-6 h-6 fill-current" />
        </a>
        <a href="https://linkedin.com/in/GKanjiscuk" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
          <LinkedinIcon className="w-6 h-6 fill-current" />
        </a>
      </div>
    </nav>
  );
};