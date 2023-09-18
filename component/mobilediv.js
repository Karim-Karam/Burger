"use client";
import React from "react";
import Image from "next/image";
import assetr4 from "../images/Asset4.png";

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
      <div></div>
    </div>
  );
};

export default Mobilediv;
