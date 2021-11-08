import React, { useState } from "react";

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
        className="btn btn-outline-light"
        type="submit"
        value="Add city"
      />
    </form>
  );
};

export default SearchBar;
