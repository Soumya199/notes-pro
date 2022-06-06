import NotesItem from "./NotesItem";
import noteContext from "../context/notes/NoteContext";
import React, { useContext, useEffect, useRef,useState } from "react";
import AddNotes from "./AddNotes";
import UpdateNotes from "./UpdateNotes";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const ref = useRef();
  const [noteToUpdate, setnoteToUpdate] = useState({})
  useEffect(() => {
    getNotes();
    console.log("ddd",noteToUpdate)
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    console.log("coming",note);
    setnoteToUpdate(note)
    ref.current.click();
    console.log("here",noteToUpdate)
  };

  return (
    <div>
      <AddNotes title="Add Notes" operation="Save Note"/>

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
            {/* //Update notes by rendering AddNotes Component  */}
            <UpdateNotes  noteToUpdate={noteToUpdate} />
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-2">
        {notes.map((res) => {
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
