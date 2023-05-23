import React, { useState } from 'react';

export default function FilterBar({ onFilterChange, categoryOptions }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
// console.log(categoryOptions,"categoryOptions");
const categorySet = [...new Set(categoryOptions.map((category) => category.category))];

const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedDate('');
    onFilterChange('', '', '');
  };

  const handleExplore = () => {
    onFilterChange(searchQuery, selectedCategory, selectedDate);
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
       <select value={selectedCategory} onChange={handleCategoryChange}>
    <option value="">All Categories</option>
    {categorySet.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
      {/* Add date picker component */}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleExplore}>Explore</button>
    </div>
  );
}
