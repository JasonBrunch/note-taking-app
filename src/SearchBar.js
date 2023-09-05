import React, { useState } from 'react';
import './styles.css';

const SearchBar = ({ notes, handleNoteClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0,20);

  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      {searchQuery && (
        <div className="dropdown-container">  {/* New container div */}
          <div className="dropdown-menu show">
            {filteredNotes.map((note, index) => (
              <a
                key={index}
                className="dropdown-item"
                onClick={() => handleNoteClick(note)}
              >
                {note.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;