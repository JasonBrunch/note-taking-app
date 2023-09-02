import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';



const EditMode = ({ localNote, setLocalNote, saveNote }) => {
    const quillRef = useRef(null);
  
    useEffect(() => {
        // Remove any existing Quill instances
        if (quillRef.current && quillRef.current.querySelector('.ql-toolbar')) {
          quillRef.current.innerHTML = '';
        }
      
        const quill = new Quill(quillRef.current, {
          theme: 'snow',
        });
        
        // Initialize Quill with combinedText
        const combinedText = localNote ? `${localNote.title}\n${localNote.content}` : "";
        quill.setText(combinedText);
      
        quill.on('text-change', () => {
          const fullText = quill.getText();
          const lines = fullText.split('\n');
          const title = lines[0] || "";
          const content = lines.slice(1).join('\n').trim() || "";
      
          setLocalNote({
            ...localNote,
            title,
            content,
          });
        });
      }, [localNote]);
  
    return (
      <div>
        <div ref={quillRef}></div>
        <button className="btn btn-primary mt-2" onClick={saveNote}>
          Save
        </button>
      </div>
    );
  };
  const DisplayMode = ({ localNote, handleEditClick }) => (
    <div>
      <h1 style={{ textAlign: 'left' }}>{localNote.title}</h1>
      <p>{localNote.content}</p>
      <button className="btn btn-secondary" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );


const NoteEditor = ({ activeNote, editing, setEditing, handleSaveClick }) => {

  // Local state for editing note
  const [localNote, setLocalNote] = useState(null);

  const handleEditClick = () => {
    setEditing(true);
  };

  const saveNote = () => {
    handleSaveClick(localNote);
    setEditing(false);
  };

  useEffect(() => {
    if (activeNote) {
      setLocalNote(activeNote);
    }
  }, [activeNote]);

  return (
    <div>
      {localNote === null ? (
        <p>Select a note to display its content.</p>
      ) : (
        <div>
          {editing ? (
            <EditMode localNote={localNote} setLocalNote={setLocalNote} saveNote={saveNote} />
          ) : (
            <DisplayMode localNote={localNote} handleEditClick={handleEditClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default NoteEditor;