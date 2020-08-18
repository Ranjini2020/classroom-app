import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const[check,setCheck]=useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
   console.log(check);
    try {
      const loginUser = { email, password ,check};
      const loginRes = await axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      console.log(loginRes.data+"client side")
      setUserData({
       // token: loginRes.data.token,
        user: loginRes.data,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <h2>Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
 
 <select 
 onChange={(e)=>setCheck(e.target.value)}
 >
  <option value="true">Teacher</option>
  <option value="false">Student</option>
 
</select>

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
