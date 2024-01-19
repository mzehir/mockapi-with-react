import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";

const FormControlLabelComp = ({ label, ...props }) => {
  return <FormControlLabel {...(label ? { label: label } : {})} {...props} />;
};

export default FormControlLabelComp;
