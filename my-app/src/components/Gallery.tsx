import { motion } from "framer-motion";

const Gallery = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(8)].map((_, idx) => (
        <motion.div key={idx} className="h-40 bg-gray-300 rounded" whileHover={{ scale: 1.05 }}></motion.div>
      ))}
    </div>
  </section>
);

export default Gallery;