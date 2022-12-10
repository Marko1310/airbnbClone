import React from "react";

const Search = function ({ searchchange }) {
  return (
    <div className="search--container">
      <input
        className="search--box"
        type="search"
        placeholder="filter reviews"
        onChange={searchchange}
      />
    </div>
  );
};

export default Search;
