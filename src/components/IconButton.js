import React from "react";
import IconButton from "@mui/material/IconButton";

const IconButtonComp = (props) => {
  const { children, ...other } = props;

  return <IconButton {...other}>{children}</IconButton>;
};

export default IconButtonComp;
