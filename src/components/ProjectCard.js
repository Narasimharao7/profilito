import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/card.css";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };

  // const tags = project.tags || ["React", "CSS", "JavaScript"];

  // Check if description exceeds 4 lines (approximation based on character count)
  const descriptionLines = project.description.split("\n");
  const isLongDescription =
    descriptionLines.length > 4 || project.description.length > 120; // Fallback for character count

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="image-overlay"></div>
      </div>
      <h3>{project.title}</h3>
      <p className={isExpanded ? "expanded" : ""}>{project.description}</p>
      {!isExpanded && isLongDescription && (
        <button className="more-btn" onClick={() => setIsExpanded(true)}>
          More
        </button>
      )}
      {isExpanded && (
        <button className="more-btn" onClick={() => setIsExpanded(false)}>
          Less
        </button>
      )}
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
