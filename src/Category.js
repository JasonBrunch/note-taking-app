import React from 'react';

const Category = ({ name }) => {
    return (
      <div style={{ paddingLeft: '0.75em', position: 'relative' }}>
        <span>{name}</span>
        <i className="bi bi-folder-fill" style={{ position: 'absolute', left: '-1.5em', top: '50%', transform: 'translateY(-50%)' }}></i>
      </div>
    );
  };

export default Category;