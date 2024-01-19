import React from "react";
import styled from "styled-components/macro";

import BoxComp from "../../../components/Box";
import TypographyComp from "../../../components/Typography";
import SortByCard from "../../../components/multibleComp/cards/SortByCard";
import FilterByCard from "../../../components/multibleComp/cards/FilterByCard";
import { sortByConstantToArray } from "../../../utils/constants/appConstants/sortByConstant";

const SortingAndFilteringContainer = styled(BoxComp).withConfig({
  shouldForwardProp: (prop) => prop !== "isFixed",
})`
  display: flex;
  flex-direction: column;
  gap: 25px;
  ${(props) =>
    props.isFixed &&
    `
    position: sticky;
    top: 50px;
  `}
`;

const CardContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardTitleText = styled(TypographyComp)`
  color: #6f6f6f;
  font-weight: 500;
  line-height: 1;
`;

const SortingAndFilteringSection = ({
  sortByValue,
  sortByOnChange,
  brandItems,
  brandByOnChange,
  modelItems,
  modelByOnChange,
  isFixed,
}) => {
  return (
    <SortingAndFilteringContainer isFixed={isFixed}>
      <SortBy sortByValue={sortByValue} sortByOnChange={sortByOnChange} />
      <Brands items={brandItems} onChange={brandByOnChange} />
      <Models items={modelItems} onChange={modelByOnChange} />
    </SortingAndFilteringContainer>
  );
};

export default SortingAndFilteringSection;

const SortBy = ({ sortByValue, sortByOnChange }) => {
  const sortByOptions = sortByConstantToArray();
  return (
    <CardContainer>
      <CardTitle>Sort By</CardTitle>

      <SortByCard
        items={sortByOptions}
        value={sortByValue}
        onChange={sortByOnChange}
      />
    </CardContainer>
  );
};

const Brands = ({ items, onChange }) => {
  return (
    <CardContainer>
      <CardTitle>Brands</CardTitle>

      <FilterByCard items={items} onChange={onChange} />
    </CardContainer>
  );
};

const Models = ({ items, onChange }) => {
  return (
    <CardContainer>
      <CardTitle>Model</CardTitle>

      <FilterByCard items={items} onChange={onChange} />
    </CardContainer>
  );
};

const CardTitle = ({ children }) => {
  return <CardTitleText>{children}</CardTitleText>;
};
