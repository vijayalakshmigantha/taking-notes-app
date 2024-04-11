import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
       // console.log(event.target.value);
       setNoteText(event.target.value);

    };
    const handleSaveClik = () => {
        handleAddNote(noteText)
    }
    return (
        <div className="note new">
            <textarea rows="10" cols="12" placeholder="Type here....." onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>180 remaining</small>
                <button className="save" onClick={handleSaveClik}>save</button>
            </div>

        </div>
    )
}

export default AddNote;