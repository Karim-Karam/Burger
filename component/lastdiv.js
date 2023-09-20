"use client";
import React from "react";
import Image from "next/image";
import assetr6 from "../images/Asset6.png";
import assetr7 from "../images/Asset7.png";
import assetr8 from "../images/Asset8.png";
import IconButton from "@mui/material/IconButton";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Lastdiv = () => {
  return (
    <div className="last-div">
      <div className="last-first"> sdxd</div>
      <div className="last-second"></div>
      <div className="last-third">
        <div className="last-gallary">gallery</div>
        <div className="last-empty"></div>
        <div className="last-text-div">
          <div className="deleciousburger"> #deleciousburger</div>
          <div className="last-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              cursus lacus mauris, ac porttitor velit feugiat sit amet. Praesent
              malesuada, nulla id elementum dignissim, urna turpis semper mi,
            </p>
          </div>
          <div className="last-find-div">
            {" "}
            <span style={{ marginRight: "1vw" }}>find us here</span>
            <IconButton style={{ backgroundColor: "white", margin: "0.5vw" }}>
              <InstagramIcon style={{ fontSize: "1.5vw", color: "#000" }} />
            </IconButton>
            <IconButton style={{ backgroundColor: "white", margin: "0.5vw" }}>
              <FacebookOutlinedIcon
                style={{ fontSize: "1.5vw", color: "#000" }}
              />
            </IconButton>
            <IconButton style={{ backgroundColor: "white", margin: "0.5vw" }}>
              <TwitterIcon style={{ fontSize: "1.5vw", color: "#000" }} />
            </IconButton>
            <IconButton style={{ backgroundColor: "white", margin: "0.5vw" }}>
              <WhatsAppIcon style={{ fontSize: "1.5vw", color: "#000" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="last-pic">
        <div style={{ width: "50%", height: "100%" }}>
          <Image
            src={assetr8}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="Picture of the author"
          />
        </div>
        <div style={{ width: "25%", height: "100%" }}>
          <Image
            src={assetr7}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="Picture of the author"
          />
        </div>
        <div style={{ width: "25%", height: "100%" }}>
          <Image
            src={assetr6}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Lastdiv;
