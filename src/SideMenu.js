const SideMenu = ({ notes, categories, onNoteClick, onAddNote, onAddCategory }) => {
  
  // Group notes by category using 'reduce'
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = [];
    }
    acc[note.category].push(note);
    return acc;
  }, {});

return (
  <div className="container overflow-auto" style={{ maxHeight: '90vh', paddingLeft: '4rem' }}>
      
      {/* Button group for adding new note and new category */}
      <div className="btn-group" role="group" aria-label="New Note Buttons">
          {/* NEW NOTE BUTTON */}
        <button 
          className="btn btn-primary mb-3" 
          onClick={onAddNote} 
          title="New Note">
            <i className="bi bi-journal-plus"></i>
        </button>
        {/* NEW CATEGORY BUTTON */}
        <button 
          className="btn btn-primary mb-3" 
          onClick={() => onAddCategory('NewCategory')} 
          title="New Category">
            <i className="bi bi-folder-plus"></i>
        </button>
      </div>
      
      {/* Loop through categories and display notes */}
      {categories.map((category, index) => (
        <div key={index} style={{marginTop: '1rem'}}>
          {/* CATEGORY NAME */}
          <div className="fw-bold fs-6 ps-0 ms-0" style={{ padding: '0.25rem 0', lineHeight: 1.2 }}>
            {category}
          </div> 
          {/* NOTES LIST */}
          <ul className="list-group list-group-flush ps-0 ms-0 py-0 border-0 fs-6"> 
            {groupedNotes[category] ? (
              groupedNotes[category].map((note, noteIndex) => (
                // LIST ITEM FOR EACH NOTE
                <li 
                  key={note.id} 
                  className="list-group-item ps-0 ms-0 py-0 border-0" 
                  style={{ padding: '0.5rem 0', marginLeft: '1.125rem' }} 
                  onClick={() => onNoteClick(note)}
                >
                  {note.title}
                </li>
              ))
            ) : (
              // PLACEHOLDER FOR UNCATAGORIZED NOTES
              <li className="list-group-item ps-0 ms-0 py-0 border-0">
                {/* Uncatogorized notes are dumped here */}
              </li>
            )}
          </ul>
        </div>
      ))}
  </div>
);
};

export default SideMenu;