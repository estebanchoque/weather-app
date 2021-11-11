import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = ({ handleSearch }) => (
  <nav className="navbar navbar-dark bg-primary shadow">
    <div className="container">
      <a
        className="display-1 navbar-brand"
        href="/"
        onClick={(e) => e.preventDefault()}
      >
        <img
          id="logo"
          src={logo}
          alt="Logo"
          width="40"
          height="40"
        />
        Weather App
      </a>
      <SearchBar handleSearch={handleSearch} />
    </div>
  </nav>
);

export default NavBar;
