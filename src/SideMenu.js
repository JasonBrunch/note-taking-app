import React from 'react';

const SideMenu = ({ notes, onNoteClick }) => {
  
  // Group the notes by category
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = [];
    }
    acc[note.category].push(note);
    return acc;
  }, {});
  
  return (
    <div>
      {
        Object.keys(groupedNotes).map((category, index) => (
          <div key={index}>
            <h1>{category}</h1>
            <ul className="list-group">
              {
                groupedNotes[category].map((note) => (
                  <li 
                    key={note.id} 
                    className="list-group-item" 
                    onClick={() => onNoteClick(note)}
                  >
                    {note.title}
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default SideMenu;