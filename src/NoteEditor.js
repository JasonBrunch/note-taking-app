import React, { useState, useEffect } from 'react';

const NoteEditor = ({ activeNote,updateActiveNote }) => {
  const [editing, setEditing] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  useEffect(() => {
    if (activeNote) {
      setNoteTitle(activeNote.title);
      setNoteContent(activeNote.content);
    } else {
      setNoteTitle('');
      setNoteContent('Select a note to display its content.');
    }
  }, [activeNote]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const updatedNote = { ...activeNote, title: noteTitle, content: noteContent };
    
    // Update local state first
    setNoteTitle(updatedNote.title);
    setNoteContent(updatedNote.content);
  
    // Then update the parent state
    updateActiveNote(updatedNote);
  
    setEditing(false);
  };

  const handleChange = (e) => {
    setNoteContent(e.target.value);
  };

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
                onClick={handleSaveClick}
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