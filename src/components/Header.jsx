import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-md w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* Logo / Brand Name */}
      <motion.h1
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        AutoProposal AI
      </motion.h1>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex space-x-6 text-base font-medium">
        {["Home", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu (Placeholder for future expansion) */}
      <div className="md:hidden">
        <button
          className="text-gray-700 focus:outline-none hover:text-blue-600 transition-colors"
          aria-label="Open Menu"
        >
          <motion.svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
