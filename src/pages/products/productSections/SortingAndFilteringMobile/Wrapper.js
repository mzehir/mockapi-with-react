import React from "react";
import styled from "styled-components/macro";
import NameByCard from "../../../../components/multibleComp/cards/NameByCard";
import DividerComp from "../../../../components/Divider";
import ChipComp from "../../../../components/Chip";
import FilterByCard from "../../../../components/multibleComp/cards/FilterByCard";
import SortByCard from "../../../../components/multibleComp/cards/SortByCard";
import { sortByConstantToArray } from "../../../../utils/constants/appConstants/sortByConstant";

const WrapperElement = styled.div`
  width: 258px;
  overflow-x: hidden;
  margin-top: 10px;
`;

export default function Wrapper({
  sortByValue,
  sortByOnChange,
  brandItems,
  brandByOnChange,
  modelItems,
  modelByOnChange,
}) {
  const sortByOptions = sortByConstantToArray();
  return (
    <WrapperElement>
      <DividerComp>
        <ChipComp label="Name" />
      </DividerComp>
      <NameByCard />

      <br />

      <DividerComp>
        <ChipComp label="Sort By" />
      </DividerComp>
      <SortByCard
        items={sortByOptions}
        value={sortByValue}
        onChange={sortByOnChange}
      />

      <br />

      <DividerComp>
        <ChipComp label="Brands" />
      </DividerComp>
      <FilterByCard items={brandItems} onChange={brandByOnChange} />

      <br />

      <DividerComp>
        <ChipComp label="Model" />
      </DividerComp>
      <FilterByCard items={modelItems} onChange={modelByOnChange} />
    </WrapperElement>
  );
}
