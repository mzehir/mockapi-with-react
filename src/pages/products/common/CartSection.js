import React from "react";
import styled from "styled-components";
import ProductUseContext from "../../../hooks/ProductUseContext";
import BoxComp from "../../../components/Box";
import TypographyComp from "../../../components/Typography";
import NoDataToShow from "../../../components/multibleComp/cards/NoDataToShow";
import CheckoutCard from "../../../components/multibleComp/cards/CheckoutCard";
import CartCard from "../../../components/multibleComp/cards/CartCard";

const CartContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: sticky;
  top: 50px;
`;

const CardContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardTitleText = styled(TypographyComp)`
  color: #6f6f6f;
  font-weight: 500;
  line-height: 1;
`;

export const CartSection = () => {
  return (
    <CartContainer>
      <Cart />
      <Checkout />
    </CartContainer>
  );
};

export default CartSection;

const Cart = () => {
  const { addProductToCart, cart, removeProductFromCart, currencySymbol } =
    ProductUseContext();

  return (
    <CardContainer>
      <CardTitleText>Cart</CardTitleText>

      {cart.length == 0 ? (
        <NoDataToShow text="You have not added products to your cart yet" />
      ) : (
        <CartCard
          removeProductFromCart={removeProductFromCart}
          cart={cart}
          addProductToCart={addProductToCart}
          currencySymbol={currencySymbol}
        />
      )}
    </CardContainer>
  );
};

const Checkout = () => {
  const { totalAmount, currencySymbol, cart } = ProductUseContext();
  return (
    <CardContainer>
      <CardTitleText>Checkout</CardTitleText>
      <CheckoutCard
        totalAmount={`${totalAmount}${currencySymbol}`}
        checkoutButtonDisabled={cart.length == 0}
        onClick={() => alert("...")}
      />
    </CardContainer>
  );
};
