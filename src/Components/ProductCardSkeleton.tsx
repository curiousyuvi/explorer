import React from "react";
import "../Styles/ProductCardSkeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton">
      <div className="image" />
      <p className="title_1" />
      <p className="title_2" />
      <p className="price" />
      <p className="stars" />
    </div>
  );
};

export default ProductCardSkeleton;
