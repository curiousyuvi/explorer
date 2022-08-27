import React, { useState } from "react";
import BigSearchInput from "../Components/BigSearchInput";
import HomeNavbar from "../Components/HomeNavbar";
import "../Styles/Home.css";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };
  return (
    <div className="home">
      <HomeNavbar />
      <div className="home_wrapper">
        <BigSearchInput
          value={query}
          onChange={handleInputChange}
          placeholder="Search for products"
        />
      </div>
    </div>
  );
};

export default Home;
