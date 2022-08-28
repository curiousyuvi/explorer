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
        ? products.map((product, index) => (
            <ProductCard
              key={product.id.toString() + index.toString()}
              product={product}
            />
          ))
        : Array(20)
            .fill("NaN")
            .map((e, index) => (
              <ProductCardSkeleton key={e.toString() + index} />
            ))}
    </div>
  );
};

export default ProductsPanel;
