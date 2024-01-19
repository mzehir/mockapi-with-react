import React, { createContext, useEffect, useState, useCallback } from "react";
import { getDecimalScale, getTheCurrencySymbol } from "../utils/helper/other";
import {
  localStorageGetAmount,
  localStorageGetCart,
  localStorageSetAmount,
  localStorageSetCart,
} from "../utils/helper/localStorageOperations";
import SnackbarComp from "../components/Snackbar";
import SlideComp from "../components/Slide";
import { Alert } from "@mui/material";

const ProductContext = createContext(null);

function ProductProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [snackbarActive, setSnackbarActive] = useState(false);

  const currencySymbol = getTheCurrencySymbol();
  const decimalScale = getDecimalScale();

  const [cart, setCart] = useState(localStorageGetCart);
  const [totalAmount, setTotalAmount] = useState(localStorageGetAmount);
  const [productFilteringText, setProductFilteringText] = useState("");

  useEffect(() => {
    snackbarActive && !open && setOpen(true);
    !snackbarActive && setSnackbarActive(true);

    const total = cart.reduce((acc, product) => {
      const price = parseFloat(product.price);
      return acc + price * product.productCount;
    }, 0);

    const formattedTotal = total.toFixed(decimalScale);
    setTotalAmount(formattedTotal);
    localStorageSetCart(JSON.stringify(cart));
    localStorageSetAmount(formattedTotal);
  }, [cart]);

  const productFilteringTextOnChange = useCallback((value) => {
    setProductFilteringText(value);
  }, []);

  const addProductToCart = useCallback((newProduct) => {
    setCart((prevCart) => {
      const currentProductIndex = prevCart.findIndex(
        (p) => p.id === newProduct.id
      );
      if (currentProductIndex !== -1) {
        return prevCart.map((item, index) =>
          index === currentProductIndex
            ? { ...item, productCount: item.productCount + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...newProduct, productCount: 1 }];
      }
    });
  }, []);

  const removeProductFromCart = useCallback((productToRemove) => {
    setCart((prevCart) => {
      const currentProductIndex = prevCart.findIndex(
        (p) => p.id === productToRemove.id
      );
      if (currentProductIndex !== -1) {
        const currentProduct = prevCart[currentProductIndex];
        if (currentProduct.productCount > 1) {
          return prevCart.map((item, index) =>
            index === currentProductIndex
              ? { ...item, productCount: item.productCount - 1 }
              : item
          );
        } else {
          return prevCart.filter((_, index) => index !== currentProductIndex);
        }
      }
      return prevCart;
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        currencySymbol,
        cart,
        totalAmount,
        productFilteringText,
        productFilteringTextOnChange,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
      <Snackbar open={open} handleClose={() => setOpen(false)} />
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };

const Snackbar = ({ open, handleClose }) => {
  return (
    <SnackbarComp
      open={open}
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...(true
        ? {
            TransitionComponent: (props) => (
              <SlideComp {...props} direction={"up"} />
            ),
          }
        : {})}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Shopping cart updated
      </Alert>
    </SnackbarComp>
  );
};
