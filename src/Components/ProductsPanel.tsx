import React from "react";
import useSeachResults from "../Hooks/useSearchResults";
import "../Styles/ProductsPanel.css";
import ProductCard from "./ProductCard";

const ProductsPanel = () => {
  const { products } = useSeachResults();
  return (
    <div className="products-panel">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsPanel;
