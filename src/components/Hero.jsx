import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-br from-blue-100 to-white text-center">
      <motion.div
        className="bg-white/80 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-10 max-w-3xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          AI-Powered Proposal Generator
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Instantly craft professional, client-ready proposals in seconds. Just
          type your prompt, and let AI do the magic.
        </motion.p>

        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-transform duration-200 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
