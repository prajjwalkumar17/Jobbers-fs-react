/** @format */

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./welcome.css";

const welcome = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Jobbers</h5>
        <div className="header__btn">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Sign-Up</button>
          </Link>
        </div>
      </div>
      <h1>Welcome to Jobbers🎉</h1>
    </header>
  );
};

export default welcome;
