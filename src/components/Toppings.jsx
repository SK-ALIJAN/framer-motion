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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={baseVarient}
              whileHover="hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button whileHover={{ scale: 1.1 }}>Order</motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
