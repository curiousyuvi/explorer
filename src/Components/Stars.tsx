import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import "../Styles/Stars.css";

const Stars = ({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) => {
  return (
    <div className="stars">
      {Array(rating)
        .fill("NaN")
        .map((e) => (
          <ImStarFull className="fill" />
        ))}
      {Array(5 - rating)
        .fill("NaN")
        .map((e) => (
          <ImStarEmpty className="empty" />
        ))}
    </div>
  );
};

export default Stars;
