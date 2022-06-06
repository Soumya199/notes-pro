import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/NoteContext';

export default function UpdateNotes(prop) {
const context = useContext(noteContext);
  const { editNote } = context;
  const [note, setnote] = useState({id:"",title:"",description:"",tag:""})
  
  const handleOnclick = () => {
    editNote(note.id,note.title,note.description,note.tag)
  };

  const onChange = (e) => {
   setnote({name:''})
  };
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <h1>Update Notes</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1"  className="form-label">
          Note Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name='name'
          defaultValue={prop?prop.noteToUpdate.title:""}
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
         <label htmlFor="exampleFormControlInput1"  className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          placeholder="Title goes here"
          onChange={onChange}
        />
        <button className="btn btn-success my-2" onClick={handleOnclick}>UpateNotes</button>
      </div>
    </div>
  )
}
