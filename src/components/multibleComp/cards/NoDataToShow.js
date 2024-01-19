import React from "react";
import styled from "styled-components";
import { CardComp, CardContentComp } from "../../Card";
import BoxComp from "../../Box";
import TypographyComp from "../../Typography";

const ContentContainer = styled(BoxComp)`
  text-align: center;
`;

const CustomCardComp = styled(CardComp).withConfig({
  shouldForwardProp: (prop) => prop !== "secondBg",
})`
  background-color: ${(props) => (props.secondBg ? "#f1f1f1" : "#FFFFFF")};
`;

const NoDataToShow = (props) => {
  const { text } = props;
  return (
    <CustomCardComp secondBg={props?.customStyle?.secondBg}>
      <CardContentComp>
        <ContentContainer>
          <TypographyComp variant="h5">{text}</TypographyComp>
        </ContentContainer>
      </CardContentComp>
    </CustomCardComp>
  );
};

export default NoDataToShow;
