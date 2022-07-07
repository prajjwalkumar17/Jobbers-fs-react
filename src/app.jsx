/** @format */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome/welcome.jsx";
import Login from "./components/Login/login";
import Header from "./components/Header/header";
import Signup from "./components/SignUp/signup";
import Dashboard from "./components/Dashboard/dashboard";
import Error from "./components/Error/error";

import React from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    role: "",
  });
  const [error, setError] = useState("");

  const SignUpHandler = (details) => {
    console.log(details);
    if (
      details.email !== "" &&
      details.name !== "" &&
      details.password === details.confirmpass
    )
      console.log("good one");
    else alert("check details properly !");
  };

  const logout = () => {
    console.log("Logout");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={<Signup Login={SignUpHandler} err={error} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
