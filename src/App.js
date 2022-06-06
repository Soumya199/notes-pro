import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NotesState";
import Alert from "./components/Alert";

function App() {

  return (
    <NoteState>
    <Router>
      <Navbar />
      <Alert/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
