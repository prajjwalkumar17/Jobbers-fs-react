/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Header from "./../Header/header";
import data from "./../../assets/jobs.json";

const dashboard = () => {
  return (
    <body>
      <Header />
      <div class="main-container">
        <h2>Dashboard</h2>
        <p>All Jobs at one place</p>
        <div class="header">
          <form>
            <h1>All categories Jobs here</h1>
          </form>
        </div>
        <div class="filter-container">
          <div class="posts-collect">
            <div class="posts-main-container">
              {data.map((job, key) => {
                return (
                  <div class="all">
                    <div class="post-content">
                      <div key={key} class="post-content-top">
                        <span>Job id : {job._id}</span>
                      </div>
                      <h2>{job.Company_name}</h2>
                      <p>{job.Job_description}</p>
                    </div>
                    <Link to={`/jobApply/${key}`} className="Link">
                      Apply
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default dashboard;
