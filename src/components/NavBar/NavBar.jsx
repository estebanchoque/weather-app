import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ handleSearch }) => (
  <div>
    <img id="logo" src="" alt="LogoIcon" />
    <SearchBar handleSearch={handleSearch} />
  </div>
);
export default NavBar;
