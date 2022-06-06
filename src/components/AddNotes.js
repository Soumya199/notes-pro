import React, { useContext,useState } from "react";
import noteContext from "../context/notes/NoteContext";

export default function AddNotes() {
  const context = useContext(noteContext);
  const { addNotes } = context;
  const [note, setnote] = useState({title:"",description:"",tag:""})

  const handleOnclick = () => {
   addNotes(note.title,note.description,note.tag)
  };

  const onChange = (e) => {
   setnote({...note,[e.target.id]:e.target.value})
  };
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <h1>Add a Note</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1"  className="form-label">
          Note Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title goes here"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          onChange={onChange}
          placeholder="description goes here"
        ></textarea>
        <button className="btn btn-success my-2" onClick={handleOnclick}>Save Note</button>
      </div>
    </div>
  );
}
