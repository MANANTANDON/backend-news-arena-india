import React from "react";
import fStyles from "./Footer.module.css";
import Image from "next/image";
//images
import love from "../../../public/Assets/love.svg";

export const Footer = () => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row">
        <div className="me-auto d-flex flex-row gap-1">
          <p className={`${fStyles.tif1}`}>COPYRIGHT © 2023</p>{" "}
          <p className={`${fStyles.tif2}`}>The ideaz Factory</p>
        </div>
        <div className="d-flex flex-row gap-2">
          <p className={`${fStyles.tif1} mt-1`}>Hand crafted and made with</p>
          <div className={fStyles.tif3}>
            <Image src={love} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
