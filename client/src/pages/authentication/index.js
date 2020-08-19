import React, { useState } from "react";

import Axios from "axios";


function Login() {
    const [registrationType, setRegistrationType] = useState(false);
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    //const [message, setMessage] = useState(null);
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
    const login = () => {
      Axios({
        method: "POST",
        data: {
          email: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then((res) => res.data ? window.location.replace("/view") : alert("User not found"))
      .catch(res => alert("User email or password is incorrect"));
    };
   
    const getUser = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/user",
      }).then(({data}) => {
        setData(data);
      });
    };
  
    return (
      <div className="App">
        <div>
          <h1>Register</h1>
          <input 
            type="checkbox"
            onClick={(e) => setRegistrationType(e.target.checked)}
          /> Teacher?
          <br/>
          <input
            placeholder="email"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Submit</button>
        </div>
  
        <div>
          <h1>Login</h1>  
          <input
            placeholder="email"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
          type="password"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Submit</button> 
        </div>
  
         <div>
          <h1>Get User</h1>
          <button onClick={getUser}>Submit</button>
           {data ? <h1>Welcome  {data.email}</h1> : null} 
         </div>  
      </div>
    );
         }
        
         export default Login