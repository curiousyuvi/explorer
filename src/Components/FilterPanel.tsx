import React from "react";
import "../Styles/FilterPanel.css";
import FilterPanelItem from "./FilterPanelItem";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <FilterPanelItem title="Brand">
        <p>content....</p>
      </FilterPanelItem>
    </div>
  );
};

export default FilterPanel;
