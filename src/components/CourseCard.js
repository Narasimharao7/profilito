import { motion } from "framer-motion";
import "../styles/global.css";

const CourseCard = ({ course }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <motion.div
      className="course-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3>{course}</h3>
      <motion.div
        className="course-overlay"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span>Completed</span>
      </motion.div>
    </motion.div>
  );
};

export default CourseCard;
