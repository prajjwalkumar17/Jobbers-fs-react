/** @format */

import "./login.css";
import React from "react";

const login = () => {
  return (
    <body>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn" />
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Please proceed for the Signup page right here and find lots of
                oppurtunities on click of a button !!
              </p>
              <button class="btn btn-primary" id="sign-up-btn">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default login;
