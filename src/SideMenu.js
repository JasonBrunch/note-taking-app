import React from 'react';

const SideMenu = ({ notes, onNoteClick, onAddNote }) => {
  
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = [];
    }
    acc[note.category].push(note);
    return acc;
  }, {});
  
 
  return (
    <div>
    <button className="btn btn-primary mb-3" onClick={onAddNote}>New Note</button>
    {
        Object.keys(groupedNotes).map((category, index) => (
          <div key={index}>
            <div className="fw-bold fs-5 mb-2">{category}</div> {/* Updated here */}
            <ul className="list-group list-group-flush"> {/* Updated here */}
            {
                groupedNotes[category].map((note) => (
                  <li 
                    key={note.id} 
                    className="list-group-item border-0" 
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