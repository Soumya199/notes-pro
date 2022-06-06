import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000/api/";
  const [notes, setNotes] = useState([]);
  
  const getNotes=async()=>{
  const response = await fetch(`${host}notes/fetchallnotes`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2MxNzk0YzJiNzdkYzU5YzgxYzY4In0sImlhdCI6MTY1NDQ0NjcwOX0.eBBQqbMsp-cIc-g12953UbdL4S_ZgonJ-09X2zHq02g",
    },
  });
  const res= await response.json()
  console.log(res)
  setNotes(res);
}



  // Add a Note
  const addNotes = async (title, description, tag) => {
    //TODO API call
    const response = await fetch(`${host}notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2MxNzk0YzJiNzdkYzU5YzgxYzY4In0sImlhdCI6MTY1NDQ0NjcwOX0.eBBQqbMsp-cIc-g12953UbdL4S_ZgonJ-09X2zHq02g",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    console.log(res);

    let note = {
      _id: res._id,
      user: res.user,
      title: title,
      description: description,
      tag: res.tag,
      date: res.date,
      __v: 0,
    };
    console.log(res._id,res.user);
    setNotes(notes.concat(note));
  };
  //Delete a Note
  const deleteNote = async(id) => {
   //API Call for delete note
   const response = await fetch(`${host}notes/deletenote/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2MxNzk0YzJiNzdkYzU5YzgxYzY4In0sImlhdCI6MTY1NDQ0NjcwOX0.eBBQqbMsp-cIc-g12953UbdL4S_ZgonJ-09X2zHq02g",
    }
  });
  const res = await response.json();
  console.log(res)
    const newNotes = notes.filter((note) => {
      return id !== note._id;
    });
    setNotes(newNotes);
  };

  //Edit a Note

  const editNote = async (id, title, description, tag) => {
    // API CALL

    const response = await fetch(`${host}notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2MxNzk0YzJiNzdkYzU5YzgxYzY4In0sImlhdCI6MTY1NDQ0NjcwOX0.eBBQqbMsp-cIc-g12953UbdL4S_ZgonJ-09X2zHq02g",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    console.log(res);

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
