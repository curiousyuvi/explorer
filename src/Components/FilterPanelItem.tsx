import React, { ReactNode, useState } from "react";
import "../Styles/FilterPanelItem.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FilterPanelItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="filter-panel-item">
      <button
        type="button"
        className={`item_tile ${collapsed ? "collapsed" : ""}`}
        onClick={toggleCollapsed}
      >
        {title}
        {collapsed ? <BiChevronUp /> : <BiChevronDown />}
      </button>
      <div className={`item_content ${collapsed ? "collapsed" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default FilterPanelItem;
