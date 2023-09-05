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
    {id:5, title: 'note 4', content: 'Content for note4', category: 'React'},
    {id:6, title: 'note 5', content: 'Content for note4', category: 'React'},
    {id:7, title: 'note 6', content: 'Content for note4', category: 'React'},
    {id:8, title: 'note 7', content: 'Content for note4', category: 'React'},
    {id:9, title: 'note 8', content: 'Content for note4', category: 'React'},
    {id:10, title: 'note 9', content: 'Content for note4', category: 'React'},
    {id:11, title: 'note 10', content: 'Content for note4', category: 'React'},
    {id:12, title: 'note 11', content: 'Content for note4', category: 'React'},
    {id:13, title: 'note 12', content: 'Content for note4', category: 'React'},
    {id:14, title: 'note 13', content: 'Content for note4', category: 'React'},
    {id:15, title: 'note 4', content: 'Content for note4', category: 'React'},
    {id:16, title: 'note 5', content: 'Content for note4', category: 'React'},
    {id:17, title: 'note 6', content: 'Content for note4', category: 'React'},
    {id:18, title: 'note 7', content: 'Content for note4', category: 'React'},
    {id:19, title: 'note 8', content: 'Content for note4', category: 'React'},
    {id:20, title: 'note 9', content: 'Content for note4', category: 'React'},
    {id:21, title: 'note 10', content: 'Content for note4', category: 'React'},
    {id:22, title: 'note 11', content: 'Content for note4', category: 'React'},
    {id:23, title: 'note 12', content: 'Content for note4', category: 'React'},
    {id:24, title: 'note 4', content: 'Content for note4', category: 'React'},
    {id:25, title: 'note 4', content: 'Content for note4', category: 'React'},
    {id:26, title: 'note 5', content: 'Content for note4', category: 'React'},
    {id:27, title: 'note 6', content: 'Content for note4', category: 'React'},
    {id:28, title: 'note 7', content: 'Content for note4', category: 'React'},
    {id:29, title: 'note 8', content: 'Content for note4', category: 'React'},
    {id:30, title: 'note 9', content: 'Content for note4', category: 'React'},
    {id:31, title: 'note 10', content: 'Content for note4', category: 'React'},
    {id:32, title: 'note 11', content: 'Content for note4', category: 'React'},
    {id:33, title: 'note 12', content: 'Content for note4', category: 'React'}
  ];
  //STATE MANAGEMENT
  const [notes, setNotes] = useState(initialNotes);
  const [activeNote, setActiveNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [categories, setCategories] = useState(['JavaScript', 'React', 'Uncategorized']);
 



    

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
          <SideMenu 
          notes={notes} 
          categories={categories} 
          onNoteClick={handleNoteClick} 
          onAddNote={addNewNote}
          onAddCategory={addNewCategory} 
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
          />
        </div>

          
        </div>
      </div>
    </div>
  );


 





}

export default App;


