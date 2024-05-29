import React, { useState } from 'react';

const NestedDropdown = () => {
  // Define the state
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  // Define the options
  const options = {
    Fruits: ["Apple", "Banana", "Orange"],
    Vegetables: ["Carrot", "Broccoli", "Spinach"],
    Grains: ["Rice", "Wheat", "Barley"]
  };

  // Handle the selection of the first dropdown
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedItem(''); // Reset the second dropdown when the first one changes
  };

  // Handle the selection of the second dropdown
  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      {/* First Dropdown */}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {Object.keys(options).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Second Dropdown */}
      {selectedCategory && (
        <select value={selectedItem} onChange={handleItemChange}>
          <option value="">Select Item</option>
          {options[selectedCategory].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default NestedDropdown;
