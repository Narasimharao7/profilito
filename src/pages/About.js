import { motion } from "framer-motion";
import "../styles/global.css";
import resume from "../assets/resume.pdf";

const About = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      <h1>About Me</h1>
      <p className="intro">
        I'm a developer with a passion for building beautiful and functional
        apps.
      </p>

      <motion.section
        className="resume-section"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Resume</h2>

        <div className="resume-content">
          {/* Education */}
          <motion.div
            className="resume-item"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3>Education</h3>
            <p>
              <strong>MERN Full Stack Course</strong>
              <br />
              NxtWave CCBP 4.0, 07/2024 - 04/2025
            </p>
            <p>
              <strong>Bachelor of Technology in Computer Science</strong>
              <br />
              University of Bharath Institute of Higher Education and Research,
              2020 - 2024, Chennai.
            </p>
            <p>
              <strong>
                12<sup>th</sup>/Intermediate
              </strong>
              <br />
              Krishnaveni jr College, 2018 - 2020, Khammam
            </p>
            <p>
              <strong>
                10<sup>th</sup>
              </strong>
              <br />
              SVM Central Public School, 2017 - 2018, Khammam
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="resume-item"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
              <li>MySQL</li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="resume-item"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <h3>Experience</h3>
            <p>
              <strong>Iam a Fresher.</strong>
            </p>
          </motion.div>

          {/* Download Resume */}
          <motion.a
            href={resume}
            download="Narasimharao_Resume.pdf"
            className="download-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
