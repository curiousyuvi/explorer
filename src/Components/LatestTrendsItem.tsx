import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../Interfaces/Product";
import "../Styles/LatestTrendsItem.css";

const LatestTrendsItem = ({ product }: { product: Product }) => {
  return (
    <Link className="latest-trends-item" to={`/${product.title}`}>
      <div>
        <img src={product.image} alt="" />
      </div>
      <p className="latest-trends-item_title">{product.title}</p>
    </Link>
  );
};

export default LatestTrendsItem;
