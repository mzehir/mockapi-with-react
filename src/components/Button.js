import React from "react";
import Button from "@mui/material/Button";

const ButtonComp = (props) => {
  const { children, ...other } = props;

  return <Button {...other}>{children}</Button>;
};

export default ButtonComp;
