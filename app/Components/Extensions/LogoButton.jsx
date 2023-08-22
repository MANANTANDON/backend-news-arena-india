import Image from "next/image";
import React from "react";
import "./LogoButton.css";

export const LogoButton = (props) => {
  const imgName = props.icon.src.split("/")[4];
  return (
    <React.Fragment>
      <button
        className={`border-0 rounded me-1 ${
          imgName.includes("facebook")
            ? "facebook"
            : imgName.includes("twitter")
            ? "twitter"
            : imgName.includes("gmail")
            ? "mail"
            : imgName.includes("github")
            ? "github"
            : ""
        } col-xl-1`}
      >
        <Image src={props.icon} alt="" />
      </button>
    </React.Fragment>
  );
};
