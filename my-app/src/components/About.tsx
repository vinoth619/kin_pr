import { motion } from 'framer-motion';

const About = () => (
  <motion.section className="p-8 bg-gray-50" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="text-gray-700 leading-loose">
      Karnataka International Network (KIN) is a global business and cultural connection platform based in the UAE, dedicated to promoting networking and collaboration among Karnataka-origin communities.
    </p>
  </motion.section>
);

export default About;