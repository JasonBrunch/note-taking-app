import React, { useState } from 'react';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import NoteEditor from './NoteEditor';

function App() {
 

  const initialNotes = [
    { id: 1, title: 'Note 1', content: 'Content for note 1', category: 'JavaScript' },
    { id: 2, title: 'Note 2', content: 'Content for note 2', category: 'React' },
    { id: 3, title: 'Note 3', content: 'Content for note 3', category: 'JavaScript' }
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [activeNote, setActiveNote] = useState(null);

  const handleNoteClick = (note) => {
    setActiveNote(note);
  };
  const updateActiveNote = (updatedNote) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        return note.id === updatedNote.id ? updatedNote : note;
      });
    });
  };

  return (
    <div className='App'>
      <NavBar />
      <div className='container-fluid'>
        <div className="row">
          {/* Left Side Menu */}
          <div className="col-lg-3 col-md-3 col-sm-12">
          <SideMenu notes={notes} onNoteClick={handleNoteClick} />
          </div>

          {/* Note Editor */}
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <NoteEditor activeNote={activeNote} updateActiveNote={updateActiveNote}/>
          </div>

          {/* Right Side Menu */}
          <div className="col-lg-3 col-md-3 col-sm-12">
          <SideMenu notes={notes} onNoteClick={handleNoteClick} />
          </div>
        </div>
      </div>
    </div>
  );


 





}

export default App;


