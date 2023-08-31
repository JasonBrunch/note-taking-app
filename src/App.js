
import React, {useState} from 'react';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import NoteEditor from './NoteEditor';

function App(){
  const sampleNotes = [
    { id: 1, title: "Note 1", content: "Content 1" },
    { id: 2, title: "Note 2", content: "Content 2" }
  ];
    const [notes, setNotes] = useState(sampleNotes);

  return(
    <div className='App'>
      <NavBar />
      <div className='container-fluide'>
        <div className="row">
          <div className="col-lg-3 col-md-f col-dm-12">
            <SideMenu />
          </div>
          <div className='col-log-9 col-md-8 col-sm-12'>
            <NoteEditor />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
