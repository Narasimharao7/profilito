import { motion } from "framer-motion";
import "../styles/global.css";

const Contact = () => {
  // Replace these with your actual email and phone number
  const userEmail = "narasimharaogundlapalli7644@gmail.com";
  const whatsappNumber = "+91 9515017644"; // Use international format, e.g., +12025550123

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // WhatsApp link format: https://wa.me/phoneNumber
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+91 ", "")}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
    >
      <h1>Contact Me</h1>
      <motion.section
        className="contact-section"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="contact-intro">
          Feel free to reach out to me for collaborations, questions, or just to
          say hi!
        </p>
        <motion.div
          className="contact-info"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          <p>
            Email:{" "}
            <motion.a
              href={`mailto:${userEmail}`}
              className="email-link"
              whileHover={{ scale: 1.05, color: "#ff6f61" }}
              whileTap={{ scale: 0.95 }}
            >
              {userEmail}
            </motion.a>
          </p>
          <p>
            WhatsApp:{" "}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
              whileHover={{ scale: 1.05, color: "#25D366" }} // WhatsApp green
              whileTap={{ scale: 0.95 }}
            >
              {whatsappNumber}
            </motion.a>
          </p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
