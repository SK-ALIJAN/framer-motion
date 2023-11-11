import React, { useState } from "react";
import { motion } from "framer-motion";

let containerVarient = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      dumping: 2,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVarient = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {},
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      drag
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarient}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childVarient}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
