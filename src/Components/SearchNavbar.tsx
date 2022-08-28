import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Styles/SearchNavbar.css";
import SearchInput from "./SearchInput";

const SearchNavbar = () => {
  const params = useParams();
  const [query, setQuery] = useState<string>(params.query || "");
  const navigator = useNavigate();
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigator(`/${query}`);
  };
  return (
    <>
      <div className="search-navbar">
        <span />
        <form onSubmit={handleFormSubmit}>
          <SearchInput
            onChange={handleInputChange}
            value={query}
            placeholder="Search for products"
          />
        </form>
        <Link to="/">
          <img src="/logo.png" alt="EXPLORER" className="logo" />
        </Link>
      </div>
      <h1>Search Results</h1>
    </>
  );
};

export default SearchNavbar;
