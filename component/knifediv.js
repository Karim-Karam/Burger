"use client";
import React from "react";
import Image from "next/image";
import assetr5 from "../images/Asset5.png";

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
      </div>
    </div>
  );
};

export default Knifediv;
