import React, { useState } from "react";
import ProductUseContext from "../../../hooks/ProductUseContext";
import CartCard from "../../../components/multibleComp/cards/CartCard";
import NoDataToShow from "../../../components/multibleComp/cards/NoDataToShow";
import GridComp from "../../../components/Grid";
import BoxComp from "../../../components/Box";
import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CheckoutIconButton } from "../../../components/customizedComp/CustomButtons";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppBar, Collapse, Toolbar } from "@mui/material";

const CartSectionTabletAndMobile = () => {
  const {
    totalAmount,
    currencySymbol,
    cart,
    addProductToCart,
    removeProductFromCart,
  } = ProductUseContext();

  const [cartDetailOpen, setCartDetailOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
      style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
    >
      <Collapse in={cartDetailOpen} timeout="auto" unmountOnExit>
        {cart.length == 0 ? (
          <NoDataToShow
            text="You have not added products to your cart yet"
            customStyle={{ secondBg: true }}
          />
        ) : (
          <CartCard
            removeProductFromCart={removeProductFromCart}
            cart={cart}
            addProductToCart={addProductToCart}
            currencySymbol={currencySymbol}
            customStyle={{ secondBg: true }}
          />
        )}
      </Collapse>

      <DividerComp />

      <Toolbar>
        <GridComp container>
          <GridComp item xs={4}>
            <BoxComp display="flex" flexDirection="column">
              <TypographyComp>Total Price</TypographyComp>

              <BoxComp display="flex" flexDirection="row">
                <TypographyComp>
                  {totalAmount}
                  {currencySymbol}
                </TypographyComp>

                {cartDetailOpen ? (
                  <ExpandMoreIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => setCartDetailOpen(false)}
                  />
                ) : (
                  <ExpandLessIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => setCartDetailOpen(true)}
                  />
                )}
              </BoxComp>
            </BoxComp>
          </GridComp>

          <GridComp item xs={5}></GridComp>

          <GridComp item xs={3} display="flex" justifyContent="end">
            <CheckoutIconButton
              style={{
                iconStyle: { color: "#fff", disabledColor: "#A6A6A6" },
                iconButtonStyle: { backgroundColor: "#2E7D32" },
              }}
              disabled={cart.length == 0}
              onClick={() => alert("...")}
            />
          </GridComp>
        </GridComp>
      </Toolbar>
    </AppBar>
  );
};

export default CartSectionTabletAndMobile;
