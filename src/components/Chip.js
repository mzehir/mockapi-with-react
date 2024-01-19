import React from "react";
import { Chip } from "@mui/material";

const ChipComp = (props) => {
  const { label, ...other } = props;

  return <Chip label={label} {...other} />;
};

export default ChipComp;
