import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaShareAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/UrbacarSRL", color: "#1877F2" },
    { icon: FaInstagram, href: "https://www.instagram.com/urbacarsrl", color: "#E4405F" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@lotes.urbacarsrl", color: "#000000" },
    { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=59167800870&text=Hola quiero mas informacion", color: "#25D366" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#b63a24] text-white p-3 rounded-full shadow-lg hover:bg-[#a03320] transition-colors duration-300"
            aria-label="Toggle social media links"
          >
            {isOpen ? <FaTimes size={24} /> : <FaShareAlt size={24} />}
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-16 right-0 bg-white p-2 rounded-lg shadow-xl"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 hover:bg-gray-100 rounded transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    style={{ color: link.color }}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
