import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import CourseCard from "../components/CourseCard";
import projects from "../data/projects";
import "../styles/global.css";

const Home = () => {
  // Sample courses data
  const courses = [
    "React Masterclass - Udemy",
    "Node.js Essentials - Coursera",
  ];

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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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
