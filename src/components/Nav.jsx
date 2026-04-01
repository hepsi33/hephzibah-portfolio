import React from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav
      className="glass-card"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container">
        <ul className="nav-links">
          <li>
            <motion.a
              href="#about"
              className="nav-link"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#experience"
              className="nav-link"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Experience
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              className="nav-link"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#certifications"
              className="nav-link"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Certifications
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#skills"
              className="nav-link"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Skills
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              className="nav-link"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;