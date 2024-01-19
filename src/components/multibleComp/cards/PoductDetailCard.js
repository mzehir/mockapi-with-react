import React from "react";
import styled from "styled-components";
import BoxComp from "../../Box";
import GridComp from "../../Grid";
import { AddToCartButton } from "../../customizedComp/CustomButtons";
import { CardComp, CardContentComp, CardMediaComp } from "../../Card";
import {
  StrongXLargePriceTypography,
  StrongXLargeTypography,
} from "../../customizedComp/CustomTypography";

const MuiCardComp = styled(CardComp)`
  padding: 10px;
`;

const MuiCardMediaComp = styled(CardMediaComp)`
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
        {image && (
          <GridComp item xs={12} md={12} lg={6} padding="50px">
            <MuiCardMediaComp image={image ? image : ""} title={brand} />
          </GridComp>
        )}

        <GridComp item xs={12} md={12} lg={6} padding="50px" marginTop="25px">
          <MuiCardContentComp>
            <ContentContainer>
              <BoxComp>
                <StrongXLargeTypography>
                  {brand} - {model}
                </StrongXLargeTypography>
                <StrongXLargeTypography>{name}</StrongXLargeTypography>

                <StrongXLargePriceTypography>
                  {price}
                </StrongXLargePriceTypography>
              </BoxComp>

              <BoxComp>
                <AddToCartButton
                  onClick={(e) => {
                    e.stopPropagation();
                    buttonOnClick();
                  }}
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
