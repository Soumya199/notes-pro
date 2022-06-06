import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'

export default function NotesItem(props) {
  const context=useContext(noteContext);
  const{deleteNote}=context;
  return (
    <div className="col-md-4">
      <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{props.note.title}</h5>
        <p className="card-text">{props.note.description}</p>
        <button className="btn btn-small btn-success mx-2" onClick={()=>{props.update(props.note)}}><i className="fa-solid fa-pen-to-square"></i></button>
        <button className="btn btn-small btn-danger mx-2" onClick={()=>{deleteNote(props.note._id)}}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
    </div>
  )
}
