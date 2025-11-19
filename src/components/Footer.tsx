import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="w-full px-8 md:px-16 lg:px-24 py-12 text-center border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, delay: 0.3 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold">Entre em contato</h2>
      <p className="text-gray-400 mt-4">
        Estou sempre aberto a novas oportunidades e colaborações.
      </p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=giovannikanjiscuk@gmail.com"
        target="_blank"
        className="group inline-flex items-center justify-center mt-8 text-lg text-orange-400 border border-orange-400 rounded-full px-8 py-3 hover:bg-orange-400 hover:text-gray-900 transition-all duration-300"
      >
        Mande um E-mail
        <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-700">
          (giovannikanjiscuk@gmail.com)
        </span>
      </a>
      <p className="text-sm text-gray-600 mt-12">
        © {new Date().getFullYear()} Giovanni Kanjiscuk. Feito com café ☕ e
        código.
      </p>
    </motion.footer>
  );
};
