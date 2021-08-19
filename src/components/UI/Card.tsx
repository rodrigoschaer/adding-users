import React, { ReactChild } from "react";
import classes from "./Card.module.scss";

type CardProps = {
  children?: ReactChild;
  className?: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
