import React from "react";
import "../Styles/SearchInput.css";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="search_wrapper">
      <input
        type="text"
        className="search_input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <FiSearch className="search_icon" />
    </div>
  );
};

export default SearchInput;
