import React, { ReactNode, useState } from "react";
import "../Styles/FilterSelector.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const FilterSelector = ({
  children,
  onSelected,
}: {
  children: ReactNode;
  onSelected?: () => void;
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="filter-selector">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {checked ? (
        <MdCheckBox className="checkbox" />
      ) : (
        <MdCheckBoxOutlineBlank className="checkbox" />
      )}
      {children}
    </div>
  );
};

export default FilterSelector;
