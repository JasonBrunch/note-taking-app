import DraggableListItem from './DraggableListItem';
import Category from './Category';
import React, { useState } from 'react';

const SideMenu = ({ notes, categories, onNoteClick, onAddNote, onAddCategory, changeNoteCategory, deleteNote }) => {
  
  const [sortMethod, setSortMethod] = useState("alphabetical");
  // Use 'reduce' to group notes by their category for easier rendering later.
  // We're reducing an array of notes into an object (acc) where the keys are 
  // the category names and the values are arrays of notes belonging to that category.
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = [];
    }
    // Push the current note into the array belonging to its category in the accumulator.
    acc[note.category].push(note);
    // Return the updated accumulator for use in the next iteration.
    return acc;
  }, {});

  // New code for sorting
  Object.keys(groupedNotes).forEach((category) => {
    groupedNotes[category].sort((a, b) => {
      if (sortMethod === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortMethod === "dateModified") {
        return new Date(b.dateModified) - new Date(a.dateModified);
      }
      return 0;
    });
  });



    // Handles the drag-and-drop event to change note categories
    const handleCategoryDrop = (e) => {
    e.preventDefault();
    const noteId = e.dataTransfer.getData('noteId');
    const newCategory = e.currentTarget.dataset.category;

    if (noteId && newCategory) {
        changeNoteCategory(noteId, newCategory);
    }
};

return (
<>
    {/* New container for the buttons */}
    <div className="container overflow-auto" style={{ maxHeight: '90vh' }}>
      {/* Button group for side menu options */}
      <div className="d-flex justify-content-center">
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
<button 
      className="btn btn-primary mb-3" 
      onClick={() => setSortMethod("alphabetical")} 
      title="Sort Alphabetically">
        <i class="bi bi-sort-alpha-down"></i>
    </button>
    <button 
      className="btn btn-primary mb-3" 
      onClick={() => setSortMethod("dateModified")} 
      title="Sort by Date Modified">
        <i class="bi bi-sort-down"></i>
    </button>



</div>
      </div>
    </div>


  <div className="container overflow-auto" style={{ maxHeight: '90vh', paddingLeft: '4rem' }}>
   
    
    

  
    
      
      {/* Loop through categories and display notes */}
      {categories.map((category, index) => (
        <div 
          key={category} 
          style={{marginTop: '1rem'}} 
          data-category={category}
          onDragOver={(e) => e.preventDefault()}  // Allow drop
          onDrop={handleCategoryDrop}  // Handle the actual drop
        >
          {/* DISPLAY CATEGORY NAME */}
          <div className="fw-bold fs-6 ps-0 ms-0" style={{ padding: '0.25rem 0', lineHeight: 1.2 }}>
          <Category name={category} />
          </div> 
          
          {/* DISPLAY NOTES LIST UNDER EACH CATEGORY */}
          <ul className="list-group list-group-flush ps-0 ms-0 py-0 border-0 fs-6"> 
            {groupedNotes[category] ? (
              groupedNotes[category].map((note, noteIndex) => (
                // LIST ITEM FOR EACH NOTE
                <DraggableListItem 
                  key={note.id}  // Add this line
                  note={note} 
                  onNoteClick={onNoteClick} 
                  changeNoteCategory={changeNoteCategory}
                  deleteNote={deleteNote}
                />
              ))
            ) : (
              // PLACEHOLDER FOR UNCATEGORIZED NOTES
              <li className="list-group-item ps-0 ms-0 py-0 border-0">
                {/* Uncatogorized notes are dumped here */}
              </li>
            )}
          </ul>
        </div>
      ))}
  </div>
  </>
);
};

export default SideMenu;