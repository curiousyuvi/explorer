import React, { useRef } from "react";
import "../Styles/BigSearchInput.css";
import { FiSearch } from "react-icons/fi";
import SearchHelper from "./SearchHelper";

const BigSearchInput = ({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const searchInput = useRef(null);
  const isInputFocused = document.activeElement === searchInput.current;
  return (
    <>
      <div className="big-search_wrapper">
        <input
          type="text"
          className="big-search_input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={searchInput}
        />
        <FiSearch className="big-search_icon" />
      </div>

      {isInputFocused ? <SearchHelper /> : <></>}
    </>
  );
};

export default BigSearchInput;
