import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Interfaces/Product";
import { getProducts } from "../Services/fake-store-api";
import "../Styles/PopularSuggestions.css";

const PopularSuggestions = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      setItems(await getProducts(4));
    };

    loadItems();
  }, []);
  return (
    <div className="popular-suggestions">
      <h2>Popular Suggestions</h2>
      {items.map((item) => (
        <Link to={`/${item.title}`}>{item.title}</Link>
      ))}
    </div>
  );
};

export default PopularSuggestions;
