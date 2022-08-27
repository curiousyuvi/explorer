import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Product } from "../Interfaces/Product";
import "../Styles/LatestTrendsItem.css";

const LatestTrendsItem = ({ product }: { product: Product }) => {
  return (
    <Link className="latest-trends-item" to={`/${product.title}`}>
      <div>
        <img src={product.image} alt="" />
        <div className="sheet">
          <FiSearch className="sheet_icon" />
        </div>
      </div>
      <p className="latest-trends-item_title">{product.title}</p>
    </Link>
  );
};

export default LatestTrendsItem;
