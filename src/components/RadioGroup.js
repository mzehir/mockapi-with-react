import React from "react";
import RadioGroup from "@mui/material/RadioGroup";

const RadioGroupComp = (props) => {
  const { children, ...other } = props;
  return <RadioGroup {...other}>{children}</RadioGroup>;
};

export default RadioGroupComp;
