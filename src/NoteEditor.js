import React, { useState, useEffect } from 'react';

const NoteEditor = ({ activeNote, noteContent, noteTitle, setNoteContent, setNoteTitle, editing, setEditing, handleSaveClick }) => {

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setNoteContent(e.target.value);
  };

  const saveNote = () => {
    const updatedNote = { ...activeNote, title: noteTitle, content: noteContent };
    handleSaveClick(updatedNote);
  };

  useEffect(() => {
    if (activeNote) {
      setNoteTitle(activeNote.title);
      setNoteContent(activeNote.content);
    }
  }, [activeNote]);



  return (
    <div>
      {activeNote === null ? (
        <p>Select a note to display its content.</p>
      ) : (
        <div>
          {editing ? (
            <input
              type="text"
              className="form-control"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          ) : (
            <h2 style={{ textAlign: 'left' }}>{noteTitle}</h2>
          )}
  
          {editing ? (
            <div>
              <textarea 
                className="form-control"
                rows="10" 
                value={noteContent}
                onChange={handleChange}
              ></textarea>
              <button 
  className="btn btn-primary mt-2"
  onClick={saveNote} // Change here
>
  Save
</button>
            </div>
          ) : (
            <div>
              <p>{noteContent}</p>
              <button 
                className="btn btn-secondary"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default NoteEditor;