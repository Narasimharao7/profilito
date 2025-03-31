// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import pic from "../assets/pic.jpg"; // Replace with your logo file path
// import "../styles/header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//     // { name: "More", path: "/more" },
//   ];

//   // Sidebar animation variants
//   const sidebarVariants = {
//     open: { x: 0, opacity: 1 },
//     closed: { x: "-100%", opacity: 0 },
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="header"
//     >
//       <Link to="/" className="nav-link">
//         <div className="logo">
//           <motion.img
//             src={pic}
//             alt="Profilito Logo"
//             className="logo-img"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//           />
//           <span className="logo-title">Narasimha Rao</span>
//         </div>
//       </Link>

//       {/* Hamburger Menu Button */}
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         <span className="hamburger-line"></span>
//         <span className="hamburger-line"></span>
//         <span className="hamburger-line"></span>
//       </button>

//       {/* Desktop Navigation */}
//       <nav className="desktop-nav">
//         {navItems.map((item) => (
//           <motion.div
//             key={item.name}
//             whileHover={{ scale: 1.1, color: "#ff6f61" }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Link to={item.path}>{item.name}</Link>
//           </motion.div>
//         ))}
//       </nav>

//       {/* Mobile Sidebar */}
//       <motion.nav
//         className="mobile-nav"
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//         variants={sidebarVariants}
//         transition={{ duration: 0.3 }}
//       >
//         {navItems.map((item) => (
//           <motion.div
//             key={item.name}
//             whileHover={{ scale: 1.1, color: "#ff6f61" }}
//             transition={{ type: "spring", stiffness: 300 }}
//             onClick={() => setIsOpen(false)} // Close sidebar on click
//           >
//             <Link to={item.path}>{item.name}</Link>
//           </motion.div>
//         ))}
//       </motion.nav>
//     </motion.header>
//   );
// };

// export default Header;
import { useState } from "react";
import { NavLink } from "react-router-dom"; // Changed from Link to NavLink
import { motion } from "framer-motion";
import pic from "../assets/pic.jpg"; // Replace with your logo file path
import "../styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    // { name: "More", path: "/more" },
  ];

  // Sidebar animation variants
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <NavLink to="/" className="nav-link-profile" end>
        {/* Changed to NavLink */}
        <div className="logo">
          <motion.img
            src={pic}
            alt="Profilito Logo"
            className="logo-img"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <span className="logo-title">Narasimha Rao</span>
        </div>
      </NavLink>

      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end // Exact match for root path
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Sidebar */}
      <motion.nav
        className="mobile-nav"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setIsOpen(false)} // Close sidebar on click
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
