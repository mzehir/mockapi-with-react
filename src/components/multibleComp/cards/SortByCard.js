import React from "react";
import { CardComp, CardContentComp } from "../../Card";
import FormControlLabelComp from "../../FormControlLabel";
import RadioGroupComp from "../../RadioGroup";
import RadioComp from "../../Radio";

const SortByCard = (props) => {
  const { items, value, onChange } = props;
  return (
    <CardComp>
      <CardContentComp>
        <RadioGroupComp value={value} onChange={onChange}>
          {items.map((item, index) => (
            <ContentRow
              key={index.toString()}
              value={item.value}
              label={item.label}
            />
          ))}
        </RadioGroupComp>
      </CardContentComp>
    </CardComp>
  );
};

export default SortByCard;

const ContentRow = ({ value, label }) => {
  return (
    <FormControlLabelComp value={value} label={label} control={<RadioComp />} />
  );
};
