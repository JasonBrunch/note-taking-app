import React from 'react';

const Category = ({ name }) => {
  return (
    <div>
      <i className="bi bi-folder-fill"></i> {/* Add this line for the icon */}
      {name}
    </div>
  );
};

export default Category;