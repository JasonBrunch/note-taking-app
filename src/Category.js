import React, { useState } from 'react';

const Category = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      style={{ paddingLeft: '0.75em', position: 'relative' }} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <span>{name}</span>
      {isHovered && (
        <span title="Create New Note">  <i className="bi bi-plus-lg"></i>
        </span>
      )}
      <i className="bi bi-folder-fill" style={{ position: 'absolute', left: '-1.5em', top: '50%', transform: 'translateY(-50%)' }}></i>
    </div>
  );
};

export default Category;