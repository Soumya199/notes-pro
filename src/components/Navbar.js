import React from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'

export default function Navbar() {
  const active=useLocation();
  const navigate=useNavigate();
  const userLogOut=()=>{
  localStorage.removeItem("token");
  navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NotesPro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${active.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active.pathname==="/about"?"active":""}`} aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      {!localStorage.getItem("token")?<div className='d-flex'>
      <Link className="btn btn-outline-success mx-1" to="/login">Login</Link>
      <Link className="btn btn-outline-success mx-1" to="/signup" >SignUp</Link>:
      </div>: <button className="btn btn-outline-success mx-1" onClick={userLogOut} >Logout</button>}
    </div>
  </div>
</nav>
  )
}
