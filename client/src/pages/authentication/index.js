import React, { useState } from "react";
import Header from '../../components/Header';

import axios from "axios";



function LoginPage(props) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  //const [message, setMessage] = useState(null);
  // const register = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       isTeacher: registrationType,
  //       email: registerUsername,
  //       password: registerPassword,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:4000/register",
  //   }).then((res) => res.data ? window.location.replace("/login") : alert("User already registered"));
  // };
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
        props.history.push("/view");
      }
    })
    .catch(res => alert("User email or password is incorrect"));
  };

  // const getUser = () => {
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/user",
  //   }).then(({ data }) => {
  //     setData(data);
  //   });
  // };

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
          {/* <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" onClick={login}>Log In</button>
        </div>
      </div> */}


        </form>
        <br />
        {/* <div>
          <h2>Get User</h2>

          <button onClick={getUser}>Submit</button>
          {data ? <h1>Welcome  {data.email}</h1> : null}
        </div> */}
      </div>
    </div>
    </div>
  )
}

// {/* <div>
//           <h1>Register</h1>
//           <input 
//             type="checkbox"
//             onClick={(e) => setRegistrationType(e.target.checked)}
//           /> Teacher?
//           <br/>
//           <input
//             placeholder="email"
//             onChange={(e) => setRegisterUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             onChange={(e) => setRegisterPassword(e.target.value)}
//           />
//           <button onClick={register}>Submit</button>
//         </div> */}

// {/* <div>
//           <h1>Login</h1>  
//           <input
//             placeholder="email"
//             onChange={(e) => setLoginUsername(e.target.value)}
//           />
//           <input
//           type="password"
//             placeholder="password"
//             onChange={(e) => setLoginPassword(e.target.value)}
//           />
//           <button onClick={login}>Submit</button> 
//         </div>

//          <div>
//           <h1>Get User</h1>
//           <button onClick={getUser}>Submit</button>
//            {data ? <h1>Welcome  {data.email}</h1> : null} 
//          </div>  
//       </div>
//     ); */}




export default LoginPage