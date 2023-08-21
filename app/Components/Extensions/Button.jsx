import React from "react";
import dbStyles from "../Daskboard/pages.module.css";

export const Button = (props) => {
  return (
    <React.Fragment>
      <button
        className={`${dbStyles.db1} btn mt-1 p-2 rounded text-start`}
        onClick={() =>
          console.log(props.items.props.children[1].props.children)
        }
      >
        {props.items}
      </button>
    </React.Fragment>
  );
};
