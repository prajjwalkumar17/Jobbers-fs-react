/** @format */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome/welcome.jsx";
import Login from "./components/Login/login";
import Signup from "./components/SignUp/signup";
import Dashboard from "./components/Dashboard/dashboard";
import PostJobs from "./components/Post Jobs/postjobs";
import Error from "./components/Error/error";

import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/postjobs" element={<PostJobs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
