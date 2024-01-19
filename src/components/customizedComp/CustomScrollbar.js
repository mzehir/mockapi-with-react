import React from "react";
import styled from "styled-components";
import BoxComp from "../Box";

const MuiBoxComp = styled(BoxComp)`
  max-height: ${(props) => props.maxHeight};
  overflow-y: auto;

  scrollbar-width: thin; /* Firefox */
  scrollbar-height: 40px; /* Firefox */
  scrollbar-color: darkgray transparent; /* Firefox */

  &::-webkit-scrollbar {
    width: 8px; /* Safari and Chrome */
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray; /* Safari and Chrome */
    height: 40px; /* Safari and Chrome */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Safari and Chrome */
  }
`;

const CustomScrollbar = ({ maxHeight = "120px", children }) => {
  return <MuiBoxComp maxHeight={maxHeight}>{children}</MuiBoxComp>;
};

export default CustomScrollbar;
