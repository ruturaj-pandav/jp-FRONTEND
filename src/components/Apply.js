import React, { useState } from "react";
import axios from "axios";
import Loggedin_Navbar from "./Loggedin_Navbar";
import { useNavigate, useParams } from "react-router-dom";
export default function Apply() {
  let navigate = useNavigate();
  const [brief, setBrief, setTitle] = useState("");

  const { postingId } = useParams();
  async function ApplyFunction() {
    try {
      let token = localStorage.getItem("jobPortal");
      let response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/employees/create-application/${postingId}`,
        { brief },
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      );
      if (response) {
        if (response.status === 200) {
          console.log("ok i gues");
          navigate(`/employee-dashboard`);
        }
      }
    } catch (error) {
      console.log("some error in apply for job function");
    }
  }

  return (
    <div>
      <Loggedin_Navbar />
      <div>
        <div className=" text-start w-1/3 mx-auto ">
          <span className="block capitalize  my-3 text-xl font-bold ">
            Apply for this job
          </span>
          <span className="block capitalize text-gray-400  ">
            Add a note that can help you stand out
          </span>
        </div>
        <div className="border-2 my-8 border-indigo-300 shadow-lg w-5/6 md:w-1/3  mx-auto p-8 ">
          <span className="capitalize   text-start block  mb-5 text-indigo-500  text-2xl   ">
            Please provide the details
          </span>

          <div>
            <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
              brief description
            </label>
            <textarea
              rows="5"
              onChange={(e) => {
                setBrief(e.target.value);
              }}
              className=" text-xs block px-2 py-1 rounded  border  w-full my-2  outline-none "
              placeholder="a short note that can help you stand out "
            />
          </div>

          <div className="mt-3 ">
            {" "}
            <button
              onClick={() => {
                ApplyFunction();
              }}
              className="bg-indigo-500 text-white py-2 px-3 rounded capitalize"
            >
              create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
