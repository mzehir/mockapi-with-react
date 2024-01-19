import React from "react";
import styled from "styled-components";
import { CardComp, CardContentComp } from "../../Card";
import BoxComp from "../../Box";
import ButtonGroupComp from "../../customizedComp/ButtonGroup";
import {
  StrongMinLineHeightTypography,
  PriceMinLineHeightTypography,
} from "../../customizedComp/CustomTypography";

const ContentContainer = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ProductDetailInCartContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
`;

const CustomCardComp = styled(CardComp).withConfig({
  shouldForwardProp: (prop) => prop !== "secondBg",
})`
  background-color: ${(props) => (props.secondBg ? "#f1f1f1" : "#FFFFFF")};
`;

const CartCard = (props) => {
  const {
    removeProductFromCart,
    cart,
    addProductToCart,
    currencySymbol,
    customStyle,
  } = props;
  return (
    <CustomCardComp secondBg={customStyle?.secondBg}>
      <CardContentComp>
        {cart.map((item, index) => (
          <ContentContainer key={index.toString()}>
            <ProductDetailInCart
              brand={item.brand}
              model={item.model}
              price={`${item.price}${currencySymbol}`}
            />
            <ButtonGroup
              removeProductFromCart={() => removeProductFromCart(item)}
              productCount={item.productCount}
              addProductToCart={() => addProductToCart(item)}
            />
          </ContentContainer>
        ))}
      </CardContentComp>
    </CustomCardComp>
  );
};

export default CartCard;

export const ProductDetailInCart = ({ brand, model, price }) => {
  return (
    <ProductDetailInCartContainer>
      <StrongMinLineHeightTypography>{`${brand} - ${model}`}</StrongMinLineHeightTypography>
      <PriceMinLineHeightTypography>{price}</PriceMinLineHeightTypography>
    </ProductDetailInCartContainer>
  );
};

export const ButtonGroup = ({
  removeProductFromCart,
  productCount,
  addProductToCart,
}) => {
  return (
    <ButtonGroupComp
      removeOnClick={removeProductFromCart}
      count={productCount}
      addOnClick={addProductToCart}
    />
  );
};
