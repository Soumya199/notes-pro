import NotesItem from "./NotesItem";
import noteContext from "../context/notes/NoteContext";
import React, { useContext,useEffect } from "react";
import AddNotes from "./AddNotes";

function Notes() {
  const context = useContext(noteContext);
  const { notes,getNotes} = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <AddNotes/>
      <div className="my-3 row mx-2">
        {notes.map((res) => {
          return (
            <NotesItem
              key={res._id}
              id={res._id}
              title={res.title}
              description={res.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
