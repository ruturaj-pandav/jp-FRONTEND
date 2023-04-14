import React, { useState } from "react";
import axios from "axios";
import Loggedin_Navbar from "./Loggedin_Navbar";
import { useNavigate } from "react-router-dom";
export default function PostAJob() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState();
  const [minexp, setExp] = useState();
  const [jd, setJd] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("fullTime");
  const handleSelectChange = (event) => {
    setType(event.target.value);
  };
  async function PostAJobFunction() {
    if (
      title !== "" &&
      salary != "" &&
      minexp != "" &&
      jd != "" &&
      note != "" &&
      type != ""
    ) {
      try {
        let token = localStorage.getItem("jobPortal");
        let response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/employers/create-job`,
          { title, jd, minexp, type, salary, note },
          {
            headers: {
              authorization: `token ${token}`,
            },
          }
        );
        if (response) {
          if (response.status === 200) {
            console.log("ok i gues");
            navigate(`/employer-dashboard`);
          }
        }
      } catch (error) {
        console.log("some error in create employer acount");
      }
    }
    else {
      alert("You need to fill out all the fields")
    }
   
  }

  return (
    <div>
      <Loggedin_Navbar />
      <div>
        <span className="block text-start w-1/3 text-2xl capitalize font-semibold mx-auto ">
          Create a job
        </span>
        <div className="border-2 my-8 border-indigo-300 shadow-lg w-5/6 md:w-1/3  mx-auto p-8 ">
          <span className="capitalize   text-start block  mb-5 text-indigo-500  text-2xl   ">
            Please provide the details
          </span>
          <div>
            <label className=" capitalize block  text-start text-gray-600 text-sm  my-1 ">
              Title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="outline-none  block px-2 py-1 rounded  border  w-full my-2 "
              placeholder="what is the posting for ?"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            <div>
              <label className="capitalize block  text-start text-gray-600 text-sm  my-1  ">
                min experience
              </label>
              <input
                onChange={(e) => {
                  setExp(e.target.value);
                }}
                className="outline-none capitalize block px-2 py-1 rounded  border border-blue-200  w-full my-2 "
                type="number"
              />
            </div>
            <div>
              <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                salary
              </label>
              <input
                type="number"
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                className=" outline-none capitalize block px-2 py-1 rounded  border  w-full my-2 "
              />
            </div>
          </div>

          <div>
            <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
              Job description
            </label>
            <input
              onChange={(e) => {
                setJd(e.target.value);
              }}
              className=" block px-2 py-1 rounded  border  w-full my-2  outline-none "
              placeholder="brief job description"
            />
          </div>
          <div>
            <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
              note
            </label>
            <textarea
              rows="3"
              onChange={(e) => {
                setNote(e.target.value);
              }}
              className=" text-xs block px-2 py-1 rounded  border  w-full my-2  outline-none "
              placeholder="a short note "
            />
          </div>
          <div>
            {" "}
            <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
              Type
            </label>
            <select
              className="border text-start w-1/2 rounded block  my-2 py-1"
              value={type}
              onChange={handleSelectChange}
            >
              <option value="fullTime">Full time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="mt-3 ">
            {" "}
            <button
              onClick={() => {
                PostAJobFunction();
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
