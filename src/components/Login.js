import React,{useState} from 'react'

export default function Login() {
    const [credential, setCredential] = useState({email:"",password:""})
    const host = "http://localhost:4000/api/";
    const handleSubmit = async (e) => {
        console.log("credential",credential)
        e.preventDefault();
        const response = await fetch(`${host}auth/loginuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2MxNzk0YzJiNzdkYzU5YzgxYzY4In0sImlhdCI6MTY1NDU3Nzk3MH0.0xQg69iQ2ttp-F5GpDoNf2mAd3GmhiXr-Xbuhosqzls",
            },
            body:JSON.stringify({email:credential.email,password:credential.password})
        });
        const json=await response.json()
        console.log(json)

    }
    const onChange=(e)=>{
     setCredential({...credential,[e.target.id]:e.target.value})
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" onChange={onChange} value={credential.email} name="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} value={credential.password} id="password" name='password' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
