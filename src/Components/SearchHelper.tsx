import React from "react";
import LatestTrends from "./LatestTrends";
import PopularSuggestions from "./PopularSuggestions";
import "../Styles/SearchHelper.css";

const SearchHelper = () => {
  return (
    <div className="search-helper-wrapper">
      <LatestTrends />
      <PopularSuggestions />
    </div>
  );
};

export default SearchHelper;
