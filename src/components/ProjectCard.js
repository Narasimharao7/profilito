import { motion } from "framer-motion";
import "../styles/card.css";

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="image-overlay"></div>
      </div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.description}
      </motion.p>
      <div className="project-links">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: "#ff6f61" }}
          whileTap={{ scale: 0.9 }}
        >
          GitHub
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: "#ff6f61" }}
          whileTap={{ scale: 0.9 }}
        >
          Live
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
