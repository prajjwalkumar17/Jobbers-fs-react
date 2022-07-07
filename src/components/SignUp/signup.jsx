/** @format */

import React, { useState } from "react";
import "./signup.css";

const Signup = ({ Login, err }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    phone: "",
    role: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
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
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div class="inputfield">
            <label>Email</label>
            <input
              type="text"
              name="email"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div class="inputfield">
            <label>Password</label>
            <input
              type="password"
              name="password"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <div class="inputfield">
            <label>Confirm Password</label>
            <input
              type="password"
              name="cnfpass"
              class="input"
              onChange={(e) =>
                setDetails({ ...details, confirmpass: e.target.value })
              }
              value={details.confirmpass}
            />
          </div>
          <div class="inputfield">
            <label>Role</label>
            <div class="custom_select">
              <select
                onChange={(e) =>
                  setDetails({ ...details, role: e.target.value })
                }
                value={details.role}
              >
                <option value="User">User</option>
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
                setDetails({ ...details, phone: e.target.value })
              }
              value={details.phone}
            />
          </div>

          <div class="inputfield">
            <button type="submit" className="btn" onClick={console.log("")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Signup;
