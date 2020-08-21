import React, { useState } from "react";
import Header from '../components/Header';

import axios from "axios";
// import { Link } from "react-router-dom";

function Register(props) {
  const [registrationType, setRegistrationType] = useState(false);
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");


  const register = (event) => {
    event.preventDefault()
    axios({
      method: "POST",
      data: {
        isTeacher: registrationType,
        email: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    }).then((res) => {
      props.history.push("/login")
      // res.data ? window.location.replace("/login") : alert("User already registered")
    }).catch(err => console.log(err))
  };

  return (
    <div>


      <Header />
      <div className="container mt-4">

        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email"
                onChange={(e) => setRegisterUsername(e.target.value)}
                className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
            </div>
          </div>
          <input
            type="checkbox"
            onClick={(e) => setRegistrationType(e.target.checked)}
          /> Teacher?



          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary mt-4" onClick={register}>Sign Up</button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );



}
export default Register;