import React, { useState } from "react";
import Header from '../../components/Header';

import axios from "axios";

function LoginPage(props) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const login = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      data: {
        email: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    }).then(({data}) => {
      if(data.isTeacher){
        props.history.push("/teacher");
      } else {
        props.history.push("/coursevalidation");
      }
    })
    .catch(res => alert("User email or password is incorrect"));
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="App">
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email"
                onChange={(e) => setLoginUsername(e.target.value)}
                className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary" onClick={login}>Log In</button>
            </div>
          </div>
        </form>
        <br />
      </div>
    </div>
    </div>
  )
}

export default LoginPage