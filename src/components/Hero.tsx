import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; // Passo 1: Importe o tipo 'Variants'

// --- Sub-componente para as barras de código ---
type CodeBarProps = {
  gradient: string;
  width: string;
};

const CodeBar = ({ gradient, width }: CodeBarProps) => {
  // Passo 2: Aplique o tipo 'Variants' ao seu objeto de animação
  const barVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      variants={barVariants}
      className={`h-2 md:h-3 rounded-full my-2 ${gradient} ${width}`}
      style={{ transformOrigin: 'left' }}
    />
  );
};

// --- Componente Hero Principal ---
export const Hero = () => {
  // Passo 3: Faça o mesmo para o outro objeto de variantes
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="h-screen w-full flex items-center justify-start p-8 md:p-16 lg:p-24">
      <div className="w-full md:w-1/2 lg:w-1/3">
        {/* Grupo de Barras 1 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <CodeBar gradient="bg-gradient-to-r from-orange-400 to-red-500" width="w-3/4" />
          <CodeBar gradient="bg-gradient-to-r from-cyan-400 to-blue-500" width="w-full" />
          <CodeBar gradient="bg-gradient-to-r from-gray-500 to-gray-400" width="w-1/2" />
        </motion.div>

        <div className="my-8">
          <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
             className="text-4xl md:text-6xl font-bold"
          >
            Giovanni Kanjiscuk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-lg md:text-xl mt-2 text-gray-400"
          >
            Desenvolvedor Fullstack
          </motion.p>
        </div>

        {/* Grupo de Barras 2 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ staggerChildren: 0.1, delayChildren: 0.9 }}
          className="mt-8"
        >
          <CodeBar gradient="bg-gradient-to-r from-purple-500 to-pink-500" width="w-5/6" />
          <CodeBar gradient="bg-gradient-to-r from-green-400 to-teal-500" width="w-2/3" />
          <CodeBar gradient="bg-gradient-to-r from-gray-500 to-gray-400" width="w-3/4" />
        </motion.div>
      </div>
    </section>
  );
};