/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./postjobs.css";
import Header from "./../Header/header";

const Postjobs = () => {
  let navigate = useNavigate();
  const [jd, setDetails] = useState({
    _id: "",
    Company_name: "",
    Job_description: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    jd.Job_description = jd.Job_description.replace(/\s\s+/g, " ");

    if (jd.Company_name !== "" && jd.Job_description !== "") {
      axios
        .post("http://127.0.0.1:3000/api/v1/jobs", jd)
        .then((res) => {
          console.log(res);
          if (res.status === 201) navigate("/dashboard", { replace: true });
          alert("Job Successfully posted");
        })
        .catch((err) => console.log(err.response.data.message));
    } else {
      alert("fill details properly");
    }
  };

  return (
    <>
      <Header />
      <div className="container__post">
        <div class="apply_box">
          <form onSubmit={submitHandler}>
            <div class="form_container">
              <div class="form_control">
                <label for="first_name"> job id </label>
                <input
                  id="first_name"
                  name="_id"
                  placeholder="Enter _id"
                  onChange={(e) => setDetails({ ...jd, _id: e.target.value })}
                  value={jd._id}
                />
              </div>

              <div class="textarea_control">
                <div class="form_control">
                  <label for="city"> Company Name </label>
                  <input
                    id="city"
                    name="compname"
                    placeholder="Enter Company Name"
                    onChange={(e) =>
                      setDetails({ ...jd, Company_name: e.target.value })
                    }
                    value={jd.Company_name}
                  />
                </div>
                <label for="address"> Job Description </label>
                <textarea
                  id="address"
                  name="Job_description"
                  row="6"
                  cols="50"
                  placeholder="Enter JD"
                  onChange={(e) =>
                    setDetails({ ...jd, Job_description: e.target.value })
                  }
                  value={jd.Job_description}
                ></textarea>
              </div>
            </div>
            <div class="button_container">
              <button type="submit">Post Job</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Postjobs;
