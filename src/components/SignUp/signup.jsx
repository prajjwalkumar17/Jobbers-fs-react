/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const Signup = () => {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    Name: "",
    Email: "",
    Password: "",
    Password_confirm: "",
    Phone: "",
    Role: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3000/api/v1/auth/signup", details)
      .then((res) => {
        if (res.status === 200) navigate("/dashboard", { replace: true });
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data.message));
    // Login(details);
  };
  return (
    <form className="signupbody" onSubmit={submitHandler}>
      <div class="wrapper">
        <div class="title">Registration Form</div>
        <div class="form">
          <div class="inputfield">
            <label>Name</label>
            <input
              type="text"
              name="name"
              class="input"
              onChange={(e) => setDetails({ ...details, Name: e.target.value })}
              value={details.Name}
            />
          </div>
          <div class="inputfield">
            <label>Email</label>
            <input
              type="text"
              name="email"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, Email: e.target.value })
              }
              value={details.Email}
            />
          </div>
          <div class="inputfield">
            <label>Password</label>
            <input
              type="password"
              name="password"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, Password: e.target.value })
              }
              value={details.Password}
            />
          </div>
          <div class="inputfield">
            <label>Confirm Password</label>
            <input
              type="password"
              name="cnfpass"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, Password_confirm: e.target.value })
              }
              value={details.Password_confirm}
            />
          </div>
          <div class="inputfield">
            <label>Role</label>
            <div class="custom_select">
              <select
                onChange={(e) =>
                  setDetails({ ...details, Role: e.target.value })
                }
                value={details.Role}
              >
                <option value="">Select</option>
                <option value="Job-seeker">Job-seeker</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
          </div>

          <div class="inputfield">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, Phone: e.target.value })
              }
              value={details.Phone}
            />
          </div>

          <div class="inputfield">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Signup;
