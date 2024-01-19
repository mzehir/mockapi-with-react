import React, { useState } from "react";
import { CardComp, CardContentComp } from "../../Card";
import SearchBox from "../SearchBox";
import FormControlLabelComp from "../../FormControlLabel";
import FormGroupComp from "../../FormGroup";
import CheckboxComp from "../../Checkbox";
import CustomScrollbar from "../../customizedComp/CustomScrollbar";

const FilterByCard = (props) => {
  const { items, onChange } = props;
  const [searchBoxValue, setSearchBoxValue] = useState("");
  return (
    <CardComp>
      <CardContentComp>
        <SearchBox value={searchBoxValue} onChange={setSearchBoxValue} />

        <br />

        <CustomScrollbar>
          <FormGroupComp>
            {items
              .filter((item) =>
                item.label.toLowerCase().includes(searchBoxValue.toLowerCase())
              )
              .map((filteredItem, index) => (
                <ContentRow
                  key={index.toString()}
                  checked={filteredItem.checked}
                  onChange={(e) => onChange(e, filteredItem)}
                  label={filteredItem.label}
                />
              ))}
          </FormGroupComp>
        </CustomScrollbar>
      </CardContentComp>
    </CardComp>
  );
};

export default FilterByCard;

const ContentRow = ({ checked, onChange, label }) => {
  return (
    <FormControlLabelComp
      control={<CheckboxComp checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};
