import React, { useState } from "react";
import { Product } from "../Interfaces/Product";
import "../Styles/ProductCard.css";
import Stars from "./Stars";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }: { product: Product }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
        <img className="image" src={product.image} alt="" />
        <div className="sheet">
          <p className="sheet_content">View Product</p>
        </div>
      </div>
      <div className="detail-wrapper">
        <p className="title">{product.title}</p>
        <div className="price-wrapper">
          <p className="previous-price">
            {"Rs." + (parseInt(product.price) + 800).toString()}
          </p>
          <p className="price">{"Rs." + product.price}</p>
        </div>
        <div className="rating-wrapper">
          <Stars rating={product.rating as any} />
          <span className="ratings-count">
            {"(" + product.ratingCount + ")"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
