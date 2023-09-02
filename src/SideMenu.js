const SideMenu = ({ notes, categories, onNoteClick, onAddNote, onAddCategory }) => {
  
    const groupedNotes = notes.reduce((acc, note) => {
      if (!acc[note.category]) {
        acc[note.category] = [];
      }
      acc[note.category].push(note);
      return acc;
    }, {});
  
 
  return (
    <div>
        <div class="btn-group" role="group" aria-label="New Note Buttons">
            {/* NEW NOTE BUTTON */}
            <button className="btn btn-primary mb-3" onClick={onAddNote}>
                <i class="bi bi-journal-plus"></i>
            </button>
            <button className="btn btn-primary mb-3" onClick={() => onAddCategory('NewCategory')}>
                <i class="bi bi-folder-plus"></i>
            </button>
      </div>



      {
        
          categories.map((category, index) => (
            <div key={index} style={{marginTop: '1rem'}}>
              
              {/* CATEGORY*/}
              <div className="fw-bold fs-6 ps-0 ms-0" style={{ padding: '0.25rem 0', lineHeight: 1.2 }}>
                {category}
              </div> 
  
              <ul className="list-group list-group-flush ps-0 ms-0 py-0 border-0 fs-6"> 
              {
                  groupedNotes[category] ? (
                    groupedNotes[category].map((note, noteIndex) => (
                        <li 
                        key={note.id} 
                        className="list-group-item ps-0 ms-0 py-0 border-0" 
                        style={{ 
                          padding: '0.25rem 0', 
                          marginLeft: '1.125rem', 
                          lineHeight: 1.2,
                        }} 
                        onClick={() => onNoteClick(note)}
                        >
                        {note.title}
                        </li>
                    ))
                  ) : (
                    <li className="list-group-item ps-0 ms-0 py-0 border-0">
                     {/*uncatogorized notes are dumped here*/}
                    </li>
                  )
                }
              </ul>
            </div>
          ))
        }
    </div>
  );
};

export default SideMenu;