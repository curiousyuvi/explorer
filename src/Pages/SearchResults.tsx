import React from "react";
import FilterPanel from "../Components/FilterPanel";
import ProductsPanel from "../Components/ProductsPanel";
import SearchNavbar from "../Components/SearchNavbar";
import "../Styles/SearchResults.css";

const SearchResults = () => {
  return (
    <div className="search-results">
      <SearchNavbar />
      <h1>Search Results</h1>
      <div className="panel-wrapper">
        <FilterPanel />
        <ProductsPanel />
      </div>
    </div>
  );
};

export default SearchResults;
