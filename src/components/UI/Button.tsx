import React, { ReactChild } from "react";

import classes from "./Button.module.scss";

type ButtonProps = {
  type?: any;
  onClick?: any;
  children?: ReactChild;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
