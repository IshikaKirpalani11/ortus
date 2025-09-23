import React, { useState } from "react";
import "./Listings.css";

function Listings() {
  // State for filters
  const [filters, setFilters] = useState({
    propertyType: "",
    bedrooms: "",
    priceRange: "",
    size: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      propertyType: "",
      bedrooms: "",
      priceRange: "",
      size: "",
    });
  };

  return (
    <div className="listings-page">
      {/* FILTER BAR */}
      <div className="filters">
        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleChange}
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>

        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
        >
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>

        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
        >
          <option value="">Price Range</option>
          <option value="0-100k">0 - 100k</option>
          <option value="100k-300k">100k - 300k</option>
          <option value="300k+">300k+</option>
        </select>

        <select name="size" value={filters.size} onChange={handleChange}>
          <option value="">Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button className="more-filters">More Filters</button>
        <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {/* LISTINGS */}
      <div className="properties">
        <p>Here the filtered properties will appear...</p>
      </div>
    </div>
  );
}

export default Listings;
