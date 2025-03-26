import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/icon.ico";
import "../styles/header.css";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    // { name: "More", path: "/more" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="logo">
        <motion.img
          src={logo}
          alt="Profilito Logo"
          className="logo-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <span>Narasimha Rao</span>
      </div>
      <nav>
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1, color: "#ff6f61" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={item.path}>{item.name}</Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
