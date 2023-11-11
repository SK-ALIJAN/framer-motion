import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

let containerVarient = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, type: "spring", stiffness: 120 },
  },
    exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

let baseVarient = {
  hover: {
    scale: 1.3,
    originX: 0,
    color: "yellow",
    transition: { type: "spring", stiffness: 130 },
  },
};

const nextVarient = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={baseVarient}
              whileHover="hover"
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVarient}>
          <Link to="/toppings">
            <motion.button whileHover={{ scale: 1.1 }}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
