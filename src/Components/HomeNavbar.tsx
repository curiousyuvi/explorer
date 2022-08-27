import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomeNavbar.css";

const HomeNavbar = () => {
  return (
    <div className="home-navbar">
      <Link to="/">
        <img src="/logo.png" alt="EXPLORER" className="logo" />
      </Link>
    </div>
  );
};

export default HomeNavbar;
