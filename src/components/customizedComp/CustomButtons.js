import React from "react";
import ButtonComp from "../Button";

export const AddToCartButton = (props) => {
  const { ...other } = props;

  return (
    <ButtonComp
      size="large"
      color="primary"
      variant="contained"
      fullWidth={true}
      {...other}
    >
      Add to Cart
    </ButtonComp>
  );
};

export const CheckoutButton = (props) => {
  const { color = "primary", ...other } = props;

  return (
    <ButtonComp
      size="large"
      color={color}
      variant="contained"
      fullWidth={true}
      {...other}
    >
      Checkout
    </ButtonComp>
  );
};
