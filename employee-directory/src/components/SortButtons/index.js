import React from "react";
import "./sortbuttons.css";

function SortButtons() {
  return (
    <div>
      <li className="country">
        <label>Select Country:</label>
        <select>
          <option>All Employees</option>
          <option>USA</option>
          <option>Great Britain</option>
          <option>Australia</option>
        </select>
      </li>
      <li className="lastName">
        <label>Sort By Lastname:</label>
        <select>
          <option> Ascending (A-Z) </option>
          <option> Descending (Z-A) </option>
        </select>
      </li>
      <div className="button">
        <button className="btn btn-primary btn-lg" type="button" onClick="">
          {" "}
          Search
        </button>
      </div>
    </div>
  );
}

export default SortButtons;
