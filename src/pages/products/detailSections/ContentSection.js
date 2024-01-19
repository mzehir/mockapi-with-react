import React from "react";
import ProductUseContext from "../../../hooks/ProductUseContext";
import PoductDetailCard from "../../../components/multibleComp/cards/PoductDetailCard";

const ContentSection = ({ product, addProductToCart }) => {
  const { currencySymbol } = ProductUseContext();
  const { image, price, brand, model, name, description } = product;

  return (
    <PoductDetailCard
      image={image}
      price={`${price} ${currencySymbol}`}
      brand={brand}
      model={model}
      name={name}
      description={description}
      buttonOnClick={() => addProductToCart(product)}
    />
  );
};

export default ContentSection;
