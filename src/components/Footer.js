import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  // Animation variants for icons
  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="footer"
    >
      <div className="social-links">
        <motion.a
          href="https://github.com/Narasimharao7"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaGithub size={30} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/narasimharao7/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaLinkedin size={30} />
        </motion.a>
        <motion.a
          href="https://wa.me/9515017644"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaWhatsapp size={30} />
        </motion.a>
      </div>
      <p>© 2025 Narasimha Rao Profilito. All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
