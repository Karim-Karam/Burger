"use client";
import React from "react";
import Image from "next/image";
import assetr4 from "../images/Asset4.png";
import Button from "@mui/material/Button";

const Mobilediv = () => {
  return (
    <div className="mobile-div">
      <div>
        <Image
          src={assetr4}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt="Picture of the author"
        />
      </div>
      <div className="mobile-textDiv">
        <div className="mobile-title">
          {" "}
          <span>Burger Rewards</span>{" "}
        </div>
        <div className="mobile-subtitle">
          {" "}
          <span>Lorem ipsum</span>
        </div>
        <div className="mobile-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            cursus lacus mauris, ac porttitor velit feugiat sit amet. Praesent
            malesuada, nulla id elementum dignissim, urna turpis semper mi,
          </p>
        </div>
        <div className="order-btn-div">
          <Button className="order-btn">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default Mobilediv;
