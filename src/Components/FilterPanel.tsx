import React from "react";
import useSeachResults from "../Hooks/useSearchResults";
import "../Styles/FilterPanel.css";
import FilterPanelItem from "./FilterPanelItem";
import FilterSelector from "./FilterSelector";
import MockFilterSelector from "./MockFilterSelector";
import Stars from "./Stars";

const FilterPanel = () => {
  const {
    under1000filter,
    is1000to2000filter,
    is2000to3000filter,
    above3000filter,
    setUnder1000Filter,
    setIs1000to2000filter,
    setIs2000to3000filter,
    setAbove3000filter,
    is1Star,
    is2Star,
    is3Star,
    is4Star,
    is5Star,
    setIs1Star,
    setIs2Star,
    setIs3Star,
    setIs4Star,
    setIs5Star,
  } = useSeachResults();

  const toggle500Filter = () => {
    setUnder1000Filter(!under1000filter);
  };
  const toggle1to2Filter = () => {
    setIs1000to2000filter(!is1000to2000filter);
  };
  const toggle2to3Filter = () => {
    setIs2000to3000filter(!is2000to3000filter);
  };
  const toggle3000Filter = () => {
    setAbove3000filter(!above3000filter);
  };
  const toggle1StarFilter = () => {
    setIs1Star(!is1Star);
  };
  const toggle2StarFilter = () => {
    setIs2Star(!is2Star);
  };
  const toggle3StarFilter = () => {
    setIs3Star(!is3Star);
  };
  const toggle4StarFilter = () => {
    setIs4Star(!is4Star);
  };
  const toggle5StarFilter = () => {
    setIs5Star(!is5Star);
  };
  return (
    <div className="filter-panel">
      <FilterPanelItem title="BRAND">
        <MockFilterSelector>H&M</MockFilterSelector>
        <MockFilterSelector>Mango</MockFilterSelector>
        <MockFilterSelector>Gucci</MockFilterSelector>
      </FilterPanelItem>
      <FilterPanelItem title="PRICE RANGE">
        <FilterSelector
          handleChange={toggle500Filter}
          checked={under1000filter}
        >
          Under 1000
        </FilterSelector>
        <FilterSelector
          handleChange={toggle1to2Filter}
          checked={is1000to2000filter}
        >
          1000 to 2000
        </FilterSelector>
        <FilterSelector
          handleChange={toggle2to3Filter}
          checked={is2000to3000filter}
        >
          2000 to 3000
        </FilterSelector>
        <FilterSelector
          handleChange={toggle3000Filter}
          checked={above3000filter}
        >
          Above 3000
        </FilterSelector>
      </FilterPanelItem>
      <FilterPanelItem title="RATINGS">
        <FilterSelector checked={is5Star} handleChange={toggle5StarFilter}>
          <Stars rating={5} />
        </FilterSelector>
        <FilterSelector checked={is4Star} handleChange={toggle4StarFilter}>
          <Stars rating={4} />
        </FilterSelector>
        <FilterSelector checked={is3Star} handleChange={toggle3StarFilter}>
          <Stars rating={3} />
        </FilterSelector>
        <FilterSelector checked={is2Star} handleChange={toggle2StarFilter}>
          <Stars rating={2} />
        </FilterSelector>
        <FilterSelector checked={is1Star} handleChange={toggle1StarFilter}>
          <Stars rating={1} />
        </FilterSelector>
      </FilterPanelItem>
    </div>
  );
};

export default FilterPanel;
