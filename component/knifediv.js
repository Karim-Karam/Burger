"use client";
import React from "react";
import Image from "next/image";
import assetr5 from "../images/Asset5.png";
import Button from "@mui/material/Button";

const Knifediv = () => {
  return (
    <div className="knife-div">
      <div className="knife-img">
        <Image
          src={assetr5}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt="Picture of the author"
        />
      </div>
      <div className="knife-text">
        <div className="masterclass">
          <span>masterclass</span>
        </div>
        <div className="knife-the-div">
          <div>
            <span>the recipe for</span>
          </div>
          <div>
            <span>the most delicious</span>
          </div>

          <div className="knife-burger">
            <span>burger</span>
          </div>
        </div>
        <div className="knife-waiting">
          <p>waiting for you!</p>
        </div>
        <div>
          <Button className="order-btn">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default Knifediv;
