import React from "react";
import styled from "styled-components";
import { CardComp, CardContentComp } from "../../Card";
import BoxComp from "../../Box";
import { CheckoutButton } from "../../customizedComp/CustomButtons";
import {
  StrongPriceKeyTypography,
  StrongPriceValueTypography,
} from "../../customizedComp/CustomTypography";

const ContentContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PriceContainer = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

const CheckoutCard = (props) => {
  const { totalAmount, onClick, checkoutButtonDisabled } = props;
  return (
    <CardComp>
      <CardContentComp>
        <ContentContainer>
          <PriceContainer>
            <StrongPriceKeyTypography>Total Price:</StrongPriceKeyTypography>
            <StrongPriceValueTypography>
              {totalAmount}
            </StrongPriceValueTypography>
          </PriceContainer>

          <CheckoutButton onClick={onClick} disabled={checkoutButtonDisabled} />
        </ContentContainer>
      </CardContentComp>
    </CardComp>
  );
};

export default CheckoutCard;
