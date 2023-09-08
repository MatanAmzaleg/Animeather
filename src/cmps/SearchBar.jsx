import { useEffect, useState } from "react";


export const SearchBar = ({setInput, input}) => {




  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <section className="searchbar-sec flex align-center">
      <input
        className="search-input"
        type="text"
        placeholder="Search for cities"
        value={input}
        onChange={handleInputChange}
      />
    </section>
  );
};
