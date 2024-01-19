import React from "react";
import FormGroup from "@mui/material/FormGroup";

const FormGroupComp = (props) => {
  const { children, ...other } = props;

  return <FormGroup {...other}>{children}</FormGroup>;
};

export default FormGroupComp;
