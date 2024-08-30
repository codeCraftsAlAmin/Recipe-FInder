import React, { useState } from "react";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setSearchedQuery(value);
    setValue("");
  };

  return (
    <div className="search_box">
      <input
        type="text"
        placeholder="search your item"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <i class="ri-search-line" onClick={handleClick}></i>
    </div>
  );
};

export default Search;
