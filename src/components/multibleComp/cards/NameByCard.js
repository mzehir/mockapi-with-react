import React from "react";
import ProductUseContext from "../../../hooks/ProductUseContext";
import { CardComp, CardContentComp } from "../../Card";
import SearchBox from "../SearchBox";

const NameByCard = () => {
  const { productFilteringText, productFilteringTextOnChange } =
    ProductUseContext();

  return (
    <CardComp>
      <CardContentComp>
        <SearchBox
          value={productFilteringText}
          onChange={(value) => productFilteringTextOnChange(value)}
        />
      </CardContentComp>
    </CardComp>
  );
};

export default NameByCard;
