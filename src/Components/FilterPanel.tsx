import React from "react";
import "../Styles/FilterPanel.css";
import FilterPanelItem from "./FilterPanelItem";
import FilterSelector from "./FilterSelector";
import Stars from "./Stars";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <FilterPanelItem title="BRAND">
        <FilterSelector>H&M</FilterSelector>
        <FilterSelector>Mango</FilterSelector>
        <FilterSelector>Gucci</FilterSelector>
      </FilterPanelItem>
      <FilterPanelItem title="PRICE RANGE">
        <FilterSelector>Under 500</FilterSelector>
        <FilterSelector>1000 to 2000</FilterSelector>
        <FilterSelector>2000 to 3000</FilterSelector>
        <FilterSelector>Above 3000</FilterSelector>
      </FilterPanelItem>
      <FilterPanelItem title="RATINGS">
        <FilterSelector>
          <Stars rating={5} />
        </FilterSelector>
        <FilterSelector>
          <Stars rating={4} />
        </FilterSelector>
        <FilterSelector>
          <Stars rating={3} />
        </FilterSelector>
        <FilterSelector>
          <Stars rating={2} />
        </FilterSelector>
        <FilterSelector>
          <Stars rating={1} />
        </FilterSelector>
      </FilterPanelItem>
    </div>
  );
};

export default FilterPanel;
