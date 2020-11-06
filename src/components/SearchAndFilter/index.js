import React from "react";
import "./index.css";
import loupe from "../../assets/Vector.png";

function SearchAndFilter(props) {
  return (
    <div className="search-filter-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search-wrapper">
          <button>
            <img alt="loupe" src={loupe}></img>
          </button>
          <input
            type="search"
            placeholder="Search for applicant"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="filter-wrapper">
          <div className="filter-dropdown">
            <p>Bids</p>
            <span className="triangle-down"></span>
          </div>
          <div className="filter-dropdown">
            <p>Status</p>
            <span className="triangle-down"></span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchAndFilter;
