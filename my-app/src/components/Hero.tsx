// src/components/Hero.tsx
import { motion } from "framer-motion";
import roundbuilding from "../assets/round building.jpg"; // make sure the image exists and the name is exact

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={roundbuilding}
        alt="Round Building"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10" />

      {/* Foreground Content */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mt-24 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        KARNATAKA INTERNATIONAL NETWORK
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-200 mt-4 max-w-xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Platform fostering collaborative success across Karnataka and UAE
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        whileHover={{ scale: 1.1 }}
      >
        GET STARTED
      </motion.button>
    </div>
  );
};

export default Hero;
