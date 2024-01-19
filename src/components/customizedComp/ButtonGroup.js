import React from "react";
import styled from "styled-components";
import BoxComp from "../Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: row;
`;

const ItemContainer = styled(BoxComp)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  padding: 10px;
`;

const RemoveButton = styled(ItemContainer)`
  background-color: #f3f3f6;
  color: #616b8a;
  cursor: pointer;
`;

const ResultBox = styled(ItemContainer)`
  background-color: #2a59fe;
  color: #ffffff;
`;

const AddButton = styled(ItemContainer)`
  background-color: #f3f3f6;
  color: #616b8a;
  cursor: pointer;
`;

const ButtonGroupComp = ({ removeOnClick, count, addOnClick }) => {
  return (
    <Container>
      <RemoveButton onClick={removeOnClick}>
        <RemoveIcon />
      </RemoveButton>
      <ResultBox>{count}</ResultBox>
      <AddButton onClick={addOnClick}>
        <AddIcon />
      </AddButton>
    </Container>
  );
};

export default ButtonGroupComp;
