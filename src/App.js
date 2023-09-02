import React, { useState } from 'react';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import NoteEditor from './NoteEditor';


function App() {
  
  //PLACEHOLDER DATA FOR NOTES
  const initialNotes = [
    { id: 1, title: 'Note 1', content: 'Content for note 1', category: 'JavaScript' },
    { id: 2, title: 'Note 2', content: 'Content for note 2', category: 'React' },
    { id: 3, title: 'Note 3', content: 'Content for note 3', category: 'JavaScript' },
    {id:4, title: 'note 4', content: 'Content for note4', category: 'React'}
  ];
  //STATE MANAGEMENT
  const [notes, setNotes] = useState(initialNotes);
  const [activeNote, setActiveNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
 



    

  const handleNoteClick = (note) => {
    setActiveNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setEditing(false);
  };
  const handleSaveClick = (updatedNote) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        return note.id === updatedNote.id ? updatedNote : note;
      });
    });
    setEditing(false);
  };
  const addNewNote = () => {
    //Get the max ID of the existing notes:
    const maxId = Math.max(...notes.map(note => note.id));
    const newNote = {
      id: maxId +1,
      title: 'New Note',
      content: '',
      category: 'Uncategorized'
    }
    setNotes([...notes, newNote]);
    //Tell the editor to set as active note
    setActiveNote(newNote);
  }

  return (
    
    <div className='App'>
      <React.StrictMode>
        <NavBar />
      </React.StrictMode>
      <div className='container-fluid'>
        <div className="row">
          {/* Left Side Menu */}
          <div className="col-lg-2 col-md-2 col-sm-12">
          <React.StrictMode>
          <SideMenu notes={notes} onNoteClick={handleNoteClick} onAddNote={addNewNote} />
          </React.StrictMode>
          </div>

          {/* Note Editor */}
          
          <div className='col-lg-10 col-md-10 col-sm-12'>
          
          <NoteEditor 
            activeNote={activeNote} 
            editing={editing}
            setEditing={setEditing}
            handleSaveClick={handleSaveClick}
          />
        </div>

          
        </div>
      </div>
    </div>
  );


 





}

export default App;


