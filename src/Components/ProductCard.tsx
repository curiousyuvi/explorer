import React from "react";
import { Product } from "../Interfaces/Product";
import "../Styles/ProductCard.css";
import Stars from "./Stars";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img className="image" src={product.image} alt="" />
      </div>
      <p className="title">{product.title}</p>
      <p className="price">{"Rs." + product.price}</p>
      <Stars rating={5} />
      <span className="ratings-count">211</span>
    </div>
  );
};

export default ProductCard;
