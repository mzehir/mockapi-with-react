import React from "react";
import styled from "styled-components";
import BoxComp from "../../Box";
import GridComp from "../../Grid";
import { AddToCartButton } from "../../customizedComp/CustomButtons";
import CardMediaSkeleton from "../../customizedComp/CustomCardMedias";
import { CardComp, CardContentComp } from "../../Card";
import {
  StrongXLargePriceTypography,
  StrongXLargeTypography,
} from "../../customizedComp/CustomTypography";

const MuiCardComp = styled(CardComp)`
  padding: 10px;
`;

const MuiCardMediaComp = styled(CardMediaSkeleton)`
  background-color: #c4c4c4;
  height: 50vh;
`;

const MuiCardContentComp = styled(CardContentComp)`
  height: 100%;
  padding-left: 0;
  padding-right: 0;
`;

const ContentContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`;

export default function PoductDetailCard(props) {
  const { image, price, brand, model, name, description, buttonOnClick } =
    props;

  return (
    <MuiCardComp>
      <GridComp container spacing={1}>
        <GridComp item xs={12} md={12} lg={6} padding="50px">
          <MuiCardMediaComp image={image} title={brand} />
        </GridComp>

        <GridComp item xs={12} md={12} lg={6} padding="50px" marginTop="25px">
          <MuiCardContentComp>
            <ContentContainer>
              <BoxComp>
                <StrongXLargeTypography>
                  {brand && model ? `${brand} - ${model}` : ""}
                </StrongXLargeTypography>
                <StrongXLargeTypography>{name}</StrongXLargeTypography>

                <StrongXLargePriceTypography>
                  {price}
                </StrongXLargePriceTypography>
              </BoxComp>

              <BoxComp>
                <AddToCartButton
                  onClick={() => buttonOnClick()}
                  disabled={!price && !brand && !model}
                />

                <BoxComp sx={{ m: 10 }} />

                <StrongXLargeTypography>{description}</StrongXLargeTypography>
              </BoxComp>
            </ContentContainer>
          </MuiCardContentComp>
        </GridComp>
      </GridComp>
    </MuiCardComp>
  );
}
