"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <div className="section-two-container">
      <div className="firstdiv-section-two">
        <div className="three-div-container">
          <motion.div
            initial={{ width: "0" }}
            whileInView={{ width: "5vw" }}
            transition={{ duration: 1.5 }}
            className="yellow"
          ></motion.div>
          <motion.div
            initial={{ width: "0" }}
            whileInView={{ width: "5vw" }}
            transition={{ duration: 1 }}
            className="yellow"
          ></motion.div>
          <motion.div
            initial={{ width: "0" }}
            whileInView={{ width: "5vw" }}
            transition={{ duration: 0.5 }}
            className="yellow"
          ></motion.div>
        </div>
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default SecondSection;
