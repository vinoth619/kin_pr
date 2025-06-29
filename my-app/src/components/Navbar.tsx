import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "KINUAEMEMBERSHIP", path: "/membership" },
    { label: "GALLERY", path: "/gallery" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo & Contact */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="KIN Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="text-sm font-semibold text-gray-800 hidden sm:block">
            <p>📞 +971 52 652 2777</p>
            <p className="text-blue-500">🌐 kinuae.com</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col bg-white shadow-md px-4 py-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="py-2 text-red-700 border-b"
                onClick={() => setIsOpen(false)}
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
