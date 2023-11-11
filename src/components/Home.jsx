import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVarient = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonVarient = {
  hover: {
    scale: 1.1,
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVarient} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
