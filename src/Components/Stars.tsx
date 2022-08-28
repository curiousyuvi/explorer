import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import "../Styles/Stars.css";

const Stars = ({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) => {
  return (
    <div className="stars">
      {Array(rating)
        .fill("NaN")
        .map((e, index) => (
          <ImStarFull key={e.toString() + index} className="fill" />
        ))}
      {Array(5 - rating)
        .fill("NaN")
        .map((e, index) => (
          <ImStarEmpty key={e.toString() + index} className="empty" />
        ))}
    </div>
  );
};

export default Stars;
