import React, { useState } from 'react';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import NoteEditor from './NoteEditor';



function App() {
  //PLACEHOLDER DATA FOR NOTEBOOK NAME
  const notebookName = "Web Development Notes";
  
  //PLACEHOLDER DATA FOR NOTES
  const initialNotes = [
    { id: 1, title: 'Note 1', content: 'Content for note 1', category: 'JavaScript',dateModified: new Date().toISOString() },
    { id: 2, title: 'Note 2', content: 'Content for note 2', category: 'React', dateModified: new Date().toISOString() }
    
  ];
  //STATE MANAGEMENT
  const [notes, setNotes] = useState(initialNotes);
  const [activeNote, setActiveNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [categories, setCategories] = useState(['JavaScript', 'React', 'Uncategorized']);
 


  const deleteNote = (noteID) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== noteID));
    console.log("NOTE DELETED");
  };
  

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
  const addNewCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };
  const changeNoteCategory = (noteId, newCategory) => {
    let updatedNotes = [...notes];
    noteId = Number(noteId);  // Make sure noteId is a number
    
    for (let i = 0; i < updatedNotes.length; i++) {
      if (updatedNotes[i].id === noteId) {
        updatedNotes[i] = { ...updatedNotes[i], category: newCategory };
        break;
      }
    }
    
    setNotes(updatedNotes);
  };
  return (
    
    <div className='App'>
      <React.StrictMode>
        <NavBar notes={notes} handleNoteClick={handleNoteClick} />
      </React.StrictMode>
      <div className='container-fluid'>
        <div className="row">
          {/* Left Side Menu */}
          <div className="col-lg-2 col-md-2 col-sm-12">
          <React.StrictMode>
          <SideMenu 
            notes={notes} 
            categories={categories} 
            onNoteClick={handleNoteClick} 
            onAddNote={addNewNote}
            onAddCategory={addNewCategory}
            changeNoteCategory={changeNoteCategory} 
            deleteNote={deleteNote}
        />
          </React.StrictMode>
          </div>

          {/* Note Editor */}
          
          <div className='col-lg-10 col-md-10 col-sm-12'>
          
          <NoteEditor 
            activeNote={activeNote} 
            editing={editing}
            setEditing={setEditing}
            handleSaveClick={handleSaveClick}
            notebookName={notebookName}
          />
        </div>

          
        </div>
      </div>
    </div>
  );


 





}

export default App;


