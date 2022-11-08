import React from "react";
import icon_search from "../../assets/icons/icon_search.svg";
import "./Search.scss";

const Search = () => {
  return (
    <div className="Search">
      <img src={icon_search} />
      <input type="text" />
    </div>
  );
};

export default Search;
