import React from "react";
import ProductUseContext from "../../../../hooks/ProductUseContext";
import SearchBox from "../../SearchBox";

const SearchBoxSection = () => {
  const { productFilteringText, productFilteringTextOnChange } =
    ProductUseContext();

  return (
    <SearchBox
      value={productFilteringText}
      onChange={(value) => productFilteringTextOnChange(value)}
      searchWidthInPercent="40"
    />
  );
};

export default SearchBoxSection;
