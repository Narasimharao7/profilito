import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // For navigation
import ProjectCard from "../components/ProjectCard";
import CourseCard from "../components/CourseCard";
import projects from "../data/projects";
import "../styles/global.css";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation
  const courses = [
    "Python 100 days Course - Udemy",
    "MERN Full Stack Course - NxtWave",
  ];

  // Limit to first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <section className="profile-section">
        <h1>Hi, I'm Narasimha Rao Gundlapalli</h1>
        <p>
          I'm a passionate Full-Stack Developer with expertise in React and
          Node.js.
        </p>
      </section>

      <section className="projects-section">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <motion.button
          className="view-more-btn"
          onClick={() => navigate("/projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View More Projects
        </motion.button>
      </section>

      <section className="courses-section">
        <h2>Completed Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
