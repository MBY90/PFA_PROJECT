import React from "react";
import "./SearchPatient.css";

const SearchPatient = ({ search, setSearch }) => {
  return (
    <div>
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          placeholder="Enter the name of patient..."
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchPatient;
