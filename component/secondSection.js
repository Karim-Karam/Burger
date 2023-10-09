"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import asset3 from "../images/Asset3.png";
import Button from "@mui/material/Button";

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="sectionTwo-text-div"
        >
          <div className="sectionTwo-textTitle">
            <span>Lorem Ipsum?</span>
          </div>
          <ul className="sectionTwo-ul">
            <li>   Sed do eiusmod tempor incididunt ut Labore et</li>
            <li> Dolore magna aliqua</li>
            <li> Quis ipsum suspendisse ultrices gravida </li>
          </ul>
          <div className="order-btn-div">
            <Button className="order-btn">Learn more</Button>
          </div>
        </motion.div>
      </div>
      <div>
        <Image
          src={asset3}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default SecondSection;
