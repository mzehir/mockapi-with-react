import React from "react";
import Typography from "@mui/material/Typography";

const TypographyComp = (props) => {
  const { children, ...other } = props;

  return <Typography {...other}>{children}</Typography>;
};

export default TypographyComp;
