/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Header from "./../Header/header";
import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      DataLoaded: false,
    };
  }
  componentDidMount() {
    const url = "http://127.0.0.1:3000/api/v1/jobs/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          jobs: json.data.jobs,
          DataLoaded: true,
        });
      });
  }
  render() {
    const { DataLoaded, jobs } = this.state;
    if (!DataLoaded)
      return (
        <div>
          <h1>Please wait some time!!</h1>
        </div>
      );
    else {
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
                  {jobs.map((job, key) => {
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
    }
  }
}

// // const data = require("./../../assets/jobs.json");
// const url = "http://127.0.0.1:3000/api/v1/jobs/";
// const getdata = async () => {
//   const data = await axios.get(url);
//   return data;
// };

// const data = async () => {
//   const datas = await getdata();
//   const data1 = datas.data.data.jobs;
//   Dashboard(data);
//   data1.map((e) => {
//     console.log(e);
//   });
// };
// const Dashboard = (data) => {
//   console.log(data);

// };

export default Dashboard;
