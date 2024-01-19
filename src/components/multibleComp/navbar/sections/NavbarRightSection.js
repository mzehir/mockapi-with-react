import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { generalAppConfigs } from "../../../../redux/actions/generalAppConfigAction";
import ProductUseContext from "../../../../hooks/ProductUseContext";
import TypographyComp from "../../../Typography";
import BoxComp from "../../../Box";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 30px;
`;

const ItemWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const NavbarRightSection = () => {
  const { totalAmount, currencySymbol } = ProductUseContext();
  const appConfigs = useSelector(generalAppConfigs);

  return (
    <Container>
      <ItemWrapper>
        <ShoppingBasketIcon />
        <TypographyComp>
          {totalAmount}
          {currencySymbol}
        </TypographyComp>
      </ItemWrapper>

      <ItemWrapper>
        <PersonOutlineIcon />
        <TypographyComp>{appConfigs.username}</TypographyComp>
      </ItemWrapper>
    </Container>
  );
};

export default NavbarRightSection;
