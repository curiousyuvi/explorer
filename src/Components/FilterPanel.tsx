import React from "react";
import "../Styles/FilterPanel.css";
import FilterPanelItem from "./FilterPanelItem";
import FilterSelector from "./FilterSelector";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <FilterPanelItem title="Brand">
        <FilterSelector>M&M</FilterSelector>
      </FilterPanelItem>
    </div>
  );
};

export default FilterPanel;
