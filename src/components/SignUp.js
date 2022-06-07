import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [userDetails, setuserDetails] = useState({name:"",email:"",password:"",cpassword:""})
  const navigate=useNavigate();
  const host = "http://localhost:4000/api/";

  //POST call for signup
  const onChange=(e)=>{
   setuserDetails({...userDetails,[e.target.id]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    const {name,email,password}=userDetails;
    e.preventDefault();
        const response = await fetch(`${host}auth/createuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token")
                
            },
            body:JSON.stringify({name,email,password})
        });
        const json=await response.json()
        console.log(typeof json,json)
        if(json.success){
           // Save the auth token in localstorage and redirect
           localStorage.setItem("token",json.authToken);
           console.log("Success")
           return navigate("/")
           
        }
        else{
            alert("Enter Valid Credential")
        }

  }
  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1"  className="form-label">Enter Your Name</label>
        <input type="text" className="form-control" required id="name" onChange={onChange} value={userDetails.name} name="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" required onChange={onChange} value={userDetails.email} name="email" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" onChange={onChange} value={userDetails.password} id="password" name='password' required minLength="5" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" required minLength="5" onChange={onChange} value={userDetails.cpassword} id="cpassword" name='cpassword' />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
