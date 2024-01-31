import React from "react";
import ButtonComp from "../Button";
import IconButtonComp from "../IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export const AddToCartButton = (props) => {
  const { ...other } = props;

  return (
    <ButtonComp
      size="large"
      color="primary"
      variant="contained"
      endIcon={<AddShoppingCartIcon />}
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
      endIcon={<ShoppingCartCheckoutIcon />}
      fullWidth={true}
      {...other}
    ></ButtonComp>
  );
};

export const CheckoutIconButton = (props) => {
  const { style, disabled, onClick } = props;

  return (
    <IconButtonComp
      style={{
        backgroundColor: style.iconButtonStyle.backgroundColor,
        cursor: disabled ? "default" : "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <ShoppingCartCheckoutIcon
        style={{
          color: disabled
            ? style.iconStyle.disabledColor
            : style.iconStyle.color,
        }}
      />
    </IconButtonComp>
  );
};
