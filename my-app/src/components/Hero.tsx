// src/components/Hero.tsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen flex flex-col justify-center items-center relative">
      <div className=" top-0 w-full bg-yellow-400 py-4 text-center text-3xl font-bold text-red-700 z-10">
        KARNATAKA INTERNATIONAL NETWORK – UAE
      </div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CONNECTING WITH  KIN
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-200 mt-4 max-w-xl"
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

      <div className="absolute bottom-0 w-full flex justify-center p-8 text-white">
        <div className="flex gap-10 text-lg font-semibold">
          <span>ABOUT</span>
          <span>MEMBERSHIP</span>
          <span>GALLERY</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
