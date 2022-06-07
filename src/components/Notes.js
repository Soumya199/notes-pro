import NotesItem from "./NotesItem";
import noteContext from "../context/notes/NoteContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import AddNotes from "./AddNotes";
import { Navigate } from "react-router-dom";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef();
  const refClose = useRef();

  

  const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" })
  useEffect(() => {
     if(localStorage.getItem("token")){
      getNotes();
     }
      
     return ()=>{
      <Navigate to="/login"/>

     } 
    // eslint-disable-next-line
  }, []);

  
  

  if(!localStorage.getItem("token")){
    
  }

  const updateNote = (currentnote) => {
    setNote({ id: currentnote._id, title: currentnote.title, description: currentnote.description, tag: currentnote.tag })
    ref.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value })
  }

  const saveChanges = () => {
    console.log("updating the note", note)
    editNote(note.id, note.title, note.description, note.tag)
    refClose.current.click();

  }

  return (
    <div>
      <AddNotes title="Add Notes" operation="Save Note" />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary invisible"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* //Update notes   */}
              <div className="container" style={{ marginTop: "10px" }}>
                <h1>Add Notes</h1>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Note Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={note.title}
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
                    value={note.description}
                    rows="3"
                    onChange={onChange}
                    placeholder="description goes here"
                  ></textarea>
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    value={note.tag}
                    placeholder="Title goes here"
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* udate Notes */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={saveChanges}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-2">
        {notes.length === 0 ? "No notes to Display" : notes.map((res) => {
          return (
            <NotesItem
              key={res._id}
              note={res}
              update={updateNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
