import React from "react";
import FilterPanel from "../Components/FilterPanel";
import ProductsPanel from "../Components/ProductsPanel";
import SearchNavbar from "../Components/SearchNavbar";
import SearchResultsProvider from "../Providers/SearchResultsProvider";
import "../Styles/SearchResults.css";

const SearchResults = () => {
  return (
    <SearchResultsProvider>
      <div className="search-results">
        <SearchNavbar />
        <h1>Search Results</h1>
        <div className="panel-wrapper">
          <FilterPanel />
          <ProductsPanel />
        </div>
      </div>
    </SearchResultsProvider>
  );
};

export default SearchResults;
