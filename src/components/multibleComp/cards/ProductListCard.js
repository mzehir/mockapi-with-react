import React from "react";
import styled from "styled-components";
import BoxComp from "../../Box";
import { AddToCartButton } from "../../customizedComp/CustomButtons";
import {
  CardActionsComp,
  CardComp,
  CardContentComp,
  CardMediaComp,
} from "../../Card";
import {
  PriceMinLineHeightTypography,
  StrongMinLineHeightTypography,
} from "../../customizedComp/CustomTypography";

const MuiCardComp = styled(CardComp)`
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Gölgelendirme efekti */
    transform: scale(1.01); /* Ekrana hafiften yaklaşma efekti */
  }
`;

const MuiCardMediaComp = styled(CardMediaComp)`
  height: 175px;
`;

const MuiCardContentComp = styled(CardContentComp)`
  padding-left: 0;
  padding-right: 0;
`;

const MuiCardActionsComp = styled(CardActionsComp)`
  padding: 0;
`;

export default function ProductListCard(props) {
  const { image, price, brand, model, name, cardOnClick, buttonOnClick } =
    props;

  return (
    <MuiCardComp onClick={cardOnClick}>
      <MuiCardMediaComp image={image} title={brand} />

      <MuiCardContentComp>
        <PriceMinLineHeightTypography>{price}</PriceMinLineHeightTypography>
        <BoxComp sx={{ m: 3 }} />
        <StrongMinLineHeightTypography>
          {brand} - {model}
        </StrongMinLineHeightTypography>
        <StrongMinLineHeightTypography>{name}</StrongMinLineHeightTypography>
      </MuiCardContentComp>

      <MuiCardActionsComp>
        <AddToCartButton
          onClick={(e) => {
            e.stopPropagation();
            buttonOnClick();
          }}
        />
      </MuiCardActionsComp>
    </MuiCardComp>
  );
}
