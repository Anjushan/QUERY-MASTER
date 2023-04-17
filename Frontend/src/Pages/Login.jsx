import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export const Login = (props) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/demo/login", {email:email, password:password}).then((res)=>{
      if(res.status == 200)
        localStorage.setItem("logged_user",JSON.stringify(res.data))
        navigate("/")
    }).catch((err=>{
      setError("Username password not match!")
      console.log(err);
    }))
  };

  return (
    <div className="login">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label For="email">Email</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />

          <button
            type="submit"
            style={{ color: "white", backgroundColor: "#0069d9" }}
          >
            Login
          </button>
        </form>
        <Link className="link-btn" to="/register">
          Dont have an account? Register
        </Link>
        {error && <Typography sx={{color:'red', pt:2}}>{error}</Typography>}
      </div>
    </div>
  );
};
