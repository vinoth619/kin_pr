import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import kinLogo from "../assets/shared image.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { pathname } = useLocation(); // to highlight active link

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Membership", path: "/membership" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 shadow-lg"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo + Info */}
        <div className="flex items-center gap-4">
          <img
            src={kinLogo}
            alt="KIN Logo"
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
          <div className="hidden sm:block text-sm text-white leading-tight">
            <p className="font-semibold">📞 +971 52 652 2777</p>
            <p className="text-yellow-100 font-semibold">🌐 kinuae.com</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                pathname === link.path
                  ? "bg-white text-red-600 shadow-md"
                  : "hover:bg-white/20 hover:text-yellow-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 py-4 space-y-4 bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-400 border-t-4 border-red-600 shadow-xl rounded-b-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-center font-bold text-lg px-4 py-2 rounded-md transition duration-300 ${
                  pathname === link.path
                    ? "bg-white text-red-600 shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20 hover:text-yellow-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
