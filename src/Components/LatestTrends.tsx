import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces/Product";
import { getProducts } from "../Services/fake-store-api";
import LatestTrendsItem from "./LatestTrendsItem";
import "../Styles/LatestTrends.css";

const LatestTrends = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      setItems(await getProducts(10));
    };

    loadItems();
  }, []);

  return (
    <div className="latest-trends_wrapper">
      <h1>Latest Trends</h1>
      <div className="latest-trends_list">
        {items.map((item) => {
          return <LatestTrendsItem product={item} />;
        })}
      </div>
    </div>
  );
};

export default LatestTrends;
