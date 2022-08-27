import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces/Product";
import { getProducts } from "../Services/fake-store-api";
import LatestTrendsItem from "./LatestTrendsItem";
import "../Styles/LatestTrends.css";

const LatestTrends = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      setItems(await getProducts());
    };

    loadItems();
  }, []);

  return (
    <div className="latest-trends_wrapper">
      <h2>Latest Trends</h2>
      <div className="latest-trends_list">
        {items.map((item) => {
          return <LatestTrendsItem product={item} />;
        })}
      </div>
    </div>
  );
};

export default LatestTrends;
