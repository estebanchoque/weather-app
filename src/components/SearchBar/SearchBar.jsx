import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(input);
  };

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="City..."
        aria-label="Search"
        value={input}
        onChange={handleInputChange}
      />
      <input
        className="search-btn btn btn-outline-light"
        type="submit"
        value={!input ? "Search" : "Add"}
        disabled={!input}
      />
    </form>
  );
};

export default SearchBar;
