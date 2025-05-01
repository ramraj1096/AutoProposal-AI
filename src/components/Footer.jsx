import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-t-2xl mt-20 mx-4 sm:mx-8 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-700">
        <p className="text-sm font-medium text-center sm:text-left">
          &copy; {new Date().getFullYear()} AutoProposal AI — All rights
          reserved.
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Terms
          </a>
          <a
            href="https://github.com/ramraj1096"
            className="hover:text-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
