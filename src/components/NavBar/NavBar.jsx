import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";
import "./NavBar.css"

const NavBar = ({ handleSearch }) => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img
          id="logo"
          className="d-inline-block align-text-center"
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
