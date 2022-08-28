import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces/Product";
import { getProducts } from "../Services/fake-store-api";
import LatestTrendsItem from "./LatestTrendsItem";
import "../Styles/LatestTrends.css";
import LatestTrendsItemSkeleton from "./LatestTrendsItemSkeleton";

const LatestTrends = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      setItems(await getProducts(6));
      setLoading(false);
    };

    loadItems();
  }, []);

  return (
    <div className="latest-trends_wrapper">
      <h2>Latest Trends</h2>
      <div className="latest-trends_list">
        {!loading
          ? items.map((item, index) => {
              return (
                <LatestTrendsItem
                  key={item.id.toString() + index.toString()}
                  product={item}
                />
              );
            })
          : Array(6)
              .fill("NaN")
              .map((e, index) => {
                return <LatestTrendsItemSkeleton key={index} />;
              })}
      </div>
    </div>
  );
};

export default LatestTrends;
