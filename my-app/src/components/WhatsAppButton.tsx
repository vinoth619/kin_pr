// src/components/WhatsAppButton.tsx
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "+971 56 657 1775";
  const message = "Hi, I’m interested in KIN UAE. Please share more info.";
  const encodedMessage = encodeURIComponent(message);

  const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg
"
        alt="WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 drop-shadow-md rounded-full"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
