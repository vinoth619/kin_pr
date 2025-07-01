import { motion } from "framer-motion";
import roundBuilding from "../assets/round building.jpg"
import  bridge from "../assets/bridge.png"
import camel from "../assets/bridge.png"
import skybuilding from "../assets/sky building.jpg"

const imageCards = [
  {
    title: "Global Networking",
    url: roundBuilding,
  },
  {
    title: "Collaborative Events",
    url:  bridge,
  },
  {
    title: "Technology & Growth",
    url: skybuilding,
  },
  {
    title: "Community Impact",
    url: camel,
  },
];

const About = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white p-8 min-h-screen font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-white mb-6 tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Karnataka International Network (KIN)
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Karnataka International Network (KIN) is a vibrant global initiative
          based in the UAE, aimed at empowering and connecting the
          Karnataka-origin diaspora worldwide through cultural, technological,
          and collaborative opportunities.
        </motion.p>

        {/* Animated Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {imageCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <img
                src={card.url}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-yellow-400 tracking-wide">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Key Points */}
        <motion.div
          className="text-gray-300 space-y-6 text-lg max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p>
            🔹 <strong>Strategic Networking:</strong> KIN brings together
            professionals, entrepreneurs, and students from Karnataka around the
            world to exchange knowledge and foster business opportunities.
          </p>
          <p>
            🔹 <strong>Leadership Events:</strong> From global summits to
            startup showcases, we enable voices from Karnataka to shine on an
            international stage.
          </p>
          <p>
            🔹 <strong>Community Support:</strong> We offer mentorship programs,
            cultural festivals, and educational events to uplift the
            Kannada-speaking diaspora.
          </p>
          <p>
            🔹 <strong>Innovation & Inclusion:</strong> KIN supports
            future-ready initiatives, embracing technology, sustainability, and
            inclusive development across geographies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
