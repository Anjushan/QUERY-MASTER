import React, { useState } from "react";
import ComboBox from "../Components/AutoCompleteDropDown";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    usertype: "student",
    field: 0,
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.field !== 0 &&
      user.firstname &&
      user.lastname &&
      user.email &&
      user.password &&
      user.usertype
    ) {
      await axios
        .post("http://localhost:3003/demo/register", user)
        .then((res) => {
          if (res.status == 200) navigate("/login");
        })
        .catch((err) => {
          if (err.response.status == 401) alert("Email already registered!");
          else alert("Error registering user");
        });
    }
  };

  return (
    <div className="register">
      <div className="auth-form-container">
        <h2 style={{ display: "flex" }}>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label For="First Name">First Name</label>
          </div>
          <div>
            <input
              type="text"
              id="FirstName"
              name="firstname"
              value={user.firstname}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, firstname: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label For="Last Name">Last Name</label>
          </div>
          <div>
            <input
              type="text"
              id="LastName"
              name="lastname"
              value={user.lastname}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, lastname: e.target.value }))
              }
              required
            />
          </div>
          <div style={{ paddingTop: "5px" }}>
            {" "}
            <div class="wrapper">
              <input
                type="radio"
                name="student"
                id="option-1"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, usertype: "student" }))
                }
                checked={user.usertype === "student"}
              />
              <input
                type="radio"
                name="teacher"
                id="option-2"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, usertype: "teacher" }))
                }
                checked={user.usertype === "teacher"}
              />
              <label for="option-1" class="option option-1">
                <div class="dot"></div>
                <span>Student</span>
              </label>
              <label for="option-2" class="option option-2">
                <div class="dot"></div>
                <span>Teacher</span>
              </label>
            </div>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <label For="field">Field</label>
          </div>
          <div style={{ paddingTop: "15px" }}>
            <ComboBox user={user} setUser={setUser} />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <label For="email">Email</label>
          </div>
          <div>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <label For="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "170px",
              height: "50px",
              color: "white",
              backgroundColor: "#0069d9",
            }}
          >
            Login
          </button>
        </form>
        <Link className="link-btn" to="/login" style={{ paddingTop: "20px" }}>
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};
