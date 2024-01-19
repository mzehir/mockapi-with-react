import React from "react";
import InputBase from "@mui/material/InputBase";

const InputBaseComp = (props) => {
  const { ...other } = props;

  return <InputBase {...other} />;
};

export default InputBaseComp;
