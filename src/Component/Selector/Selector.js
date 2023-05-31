import React from "react";
import Select from "react-select";

const Selector = ({ options, onChange, placeholder, value, isDisabled }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      isDisabled={isDisabled}
    />
  );
};

export default Selector;
