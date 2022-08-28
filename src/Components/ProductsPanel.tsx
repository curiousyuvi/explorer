import React from "react";
import useSeachResults from "../Hooks/useSearchResults";
import "../Styles/ProductsPanel.css";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsPanel = () => {
  const { products, loading } = useSeachResults();
  return (
    <div className="products-panel">
      {!loading
        ? products.map((product) => <ProductCard product={product} />)
        : Array(20)
            .fill("NaN")
            .map((e) => <ProductCardSkeleton />)}
    </div>
  );
};

export default ProductsPanel;
