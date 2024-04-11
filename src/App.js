import NotesList from "./components/NotesList";
import {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([{
    id:nanoid(),
    text:"This is my first notes!",
    date:"15/06/2021"
  },
  {
    id:nanoid(),
    text:"This is my second notes!",
    date:"02/04/2020"
  },
  {
    id:nanoid(),
    text:"This is my third notes!",
    date:"05/11/2021"
  },
  {
    id:nanoid(),
    text:"This is my fourth notes!",
    date:"08/12/2021"
  },
  {
    id:nanoid(),
    text:"This is my new notes!",
    date:"25/02/2024"
  }]);

  const addNote = (text) => {
    //console.log(text);
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNote);
  }
  return <div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>
};

export default App;