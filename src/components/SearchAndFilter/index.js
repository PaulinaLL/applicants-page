import React from "react";
import "./index.css";
import loupe from "../../assets/Vector.png";

function SearchAndFilter() {
  return (
    <div className="search-filter-wrapper">
      <form>
        <img alt="loupe" src={loupe}></img>
        <input type="text" placeholder="Search for applicant"></input>
        <div className="filter-dropdown">
          <p>Bids</p>
          <span className="triangle-up"></span>
        </div>
        <div className="filter-dropdown">
          <p>Status</p>
          <span className="triangle-up"></span>
        </div>
      </form>
    </div>
  );
}

export default SearchAndFilter;
