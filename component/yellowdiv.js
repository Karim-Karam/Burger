"use client";
import React from "react";
import { motion } from "framer-motion";

const Yellowdiv = () => {
  return (
    <div className="yellow-div">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="yellow-element"
      >
        <span className="yellow-element-title">Lorem Ipsum </span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="yellow-element"
      >
        <span className="yellow-element-title"> Lorem Ipsum</span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="yellow-element"
      >
        <span className="yellow-element-title"> Lorem Ipsum </span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </motion.div>
    </div>
  );
};

export default Yellowdiv;
