import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 text-white"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-[#121212] z-40 flex flex-col items-center justify-center gap-12"
          >
            <a
              href="#projects"
              onClick={toggleMenu}
              className="text-3xl font-bold text-gray-300 hover:text-orange-400 transition-colors"
            >
              PROJETOS
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="text-3xl font-bold text-gray-300 hover:text-orange-400 transition-colors"
            >
              SOBRE
            </a>
            <div className="flex gap-8 mt-8">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=giovannikanjiscuk@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://github.com/giovannikanjiscuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <GithubIcon className="w-7 h-7 fill-current" />
              </a>
              <a
                href="https://linkedin.com/in/GKanjiscuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <LinkedinIcon className="w-7 h-7 fill-current" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
