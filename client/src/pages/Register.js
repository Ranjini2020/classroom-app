import React, { useState } from "react";

import Axios from "axios";
// import { Link } from "react-router-dom";

function Register(){
    const [registrationType, setRegistrationType] = useState(false);
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    const register = () => {
        Axios({
          method: "POST",
          data: {
            isTeacher: registrationType,
            email: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/register",
        }).then((res) => res.data ? window.location.replace("/login") : alert("User already registered"));
      };
      return (
        // <div className="Register">
        //      <div>
        //          <h1>Register</h1>
        //         <input 
        //       type="checkbox"
        //       onClick={(e) => setRegistrationType(e.target.checked)}
        //          /> Teacher?
        //          <br/>
        //          <input
        //       placeholder="email"
        //       onChange={(e) => setRegisterUsername(e.target.value)}
        //         />
        //         <input
        //       type="password"
        //       placeholder="password"
        //       onChange={(e) => setRegisterPassword(e.target.value)}
        //         />
        //         <button onClick={register}>Submit</button>
        //   </div>
        //   </div>
        <div className="container mt-4">
        
        <form>
   <div className="form-group row">
     <label  className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
       <input type="email" 
        onChange={(e) => setRegisterUsername(e.target.value)}
      className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"  onChange={(e) => setRegisterPassword(e.target.value)}/>
    </div>
  </div>
  <input 
              type="checkbox"
              onClick={(e) => setRegistrationType(e.target.checked)}
                 /> Teacher?
  
  

   <div className="form-group row">
     <div className="col-sm-10">
       <button type="submit" className="btn btn-primary mt-4"  onClick={register}>Sign in</button>
       
    </div>
   </div>
 </form>
      </div>
    );
    
  
      
}
export default Register;