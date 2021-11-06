import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(input);
  };

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City..."
        value={input}
        onChange={handleInputChange}
      />
      <input type="submit" value="Add city" />
    </form>
  );
};

export default SearchBar;
