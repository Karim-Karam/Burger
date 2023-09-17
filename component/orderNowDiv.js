"use client";
import React from "react";
import Image from "next/image";
import assetr2 from "../images/Asset2.png";
import assetr1 from "../images/Asset1.png";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
const OrderNowDiv = () => {
  return (
    <div className="order-div">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 2 }}
        className="twoburger-img-div"
      >
        <Image
          src={assetr2}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt="Picture of the author"
        />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 2 }}
        className="offer-img-div"
      >
        <div className="offer-text">
          <Image
            src={assetr1}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            alt="Picture of the author"
          />
          <div
            className="offer-text-cont"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="offer-title">
              <span>2 for $10 breakfast deal</span>
            </div>
            <div className="dots">. . . . </div>
            <div className="under-dots">
              <span>
                {" "}
                2 for $10 breakfast deal 2 for $10 breakfast deal 2 for $10
                breakfast deal
              </span>
            </div>
          </div>
          <div className="order-btn-div">
            <Button className="order-btn">ORDER NOW</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderNowDiv;
