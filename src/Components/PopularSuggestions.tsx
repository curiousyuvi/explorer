import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Interfaces/Product";
import { getProducts } from "../Services/fake-store-api";
import "../Styles/PopularSuggestions.css";

const PopularSuggestions = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      setItems(await getProducts(4));
      setLoading(false);
    };

    loadItems();
  }, []);
  return (
    <div className="popular-suggestions">
      <h2>Popular Suggestions</h2>
      {!loading ? (
        items.map((item, index) => (
          <Link
            key={item.id.toString() + index.toString()}
            to={`/${item.title}`}
          >
            {item.title}
          </Link>
        ))
      ) : (
        <SkeletonList />
      )}
    </div>
  );
};

const SkeletonList = () => {
  return (
    <div className="skeleton_list">
      {Array(4)
        .fill("NaN")
        .map((e, index) => (
          <div key={e + index.toString()} className="skeleton_item" />
        ))}
    </div>
  );
};

export default PopularSuggestions;
