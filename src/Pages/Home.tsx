import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BigSearchInput from "../Components/BigSearchInput";
import HomeNavbar from "../Components/HomeNavbar";
import "../Styles/Home.css";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const navigator = useNavigate();
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigator(`/${query}`);
  };

  return (
    <div className="home">
      <HomeNavbar />
      <div className="home_wrapper">
        <form onSubmit={handleFormSubmit}>
          <BigSearchInput
            value={query}
            onChange={handleInputChange}
            placeholder="Search for products"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
