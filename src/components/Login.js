import React from "react";
import Loggedout_Navbar from "./Loggedout_Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const [role, setRole] = useState("employer");
  let roles = ["employer", "employee"];

  ////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /////

  async function EmployeeLogin() {
    console.log("employee login")
    try {
      let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/employees/login`, {
        email,
        password,
      });
      if (response) {
        if (response.status === 200) {
          let token = response.data.token;
          localStorage.removeItem("jobPortal");
          localStorage.setItem("jobPortal", token);
          navigate(`/employee-dashboard`);
        }
      }
    } catch (error) {
      console.log("some error in create employee acount", error);
    }
  }

  async function EmployerLogin() {
    console.log("employer login")
    try {
      let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/employers/login`, {
        email,
        password,
      });
      if (response) {
        if (response.status === 200) {
          let token = response.data.token;
          localStorage.removeItem("jobPortal");
          localStorage.setItem("jobPortal", token);
          navigate(`/employer-dashboard`);
        }
      }
    } catch (error) {
      console.log("some error in create employer acount");
    }
  }
  return (
    <>
      <Loggedout_Navbar />
      <div className="my-8">
        <div className="my-4  mx-auto  w-5/6 md:w-1/3  text-start">
          <span className=" block font-bold  text-xl  ">I am a </span>
          {roles.map((thisrole, index) => {
            return (
              <span
                className={`border ${
                  role === thisrole &&
                  " bg-indigo-500 text-white border-indigo-500"
                } capitalize  my-3 mx-1 px-3 py-1 inline-block cursor-pointer`}
                onClick={() => {
                  setRole(thisrole);
                }}
              >
                {thisrole}
              </span>
            );
          })}
        </div>
        <div>
          {/* employee form  */}
          {role === "employer" && (
            <div className="border-2 my-8 border-indigo-300 shadow-lg w-5/6 md:w-1/3  mx-auto p-8 ">
              <span className="capitalize   text-start block  mb-5 text-indigo-500  text-2xl   ">
                Employer Login
              </span>

              <div>
                <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                  email name
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" block px-2 py-1 rounded  border  w-full my-2  outline-none "
                  placeholder="your email"
                />
              </div>
              <div>
                {" "}
                <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                  password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className=" outline-none block px-2 py-1 rounded  border  w-full my-2 "
                  placeholder="password"
                />
              </div>
              <div className="mt-3 ">
                {" "}
                <button
                  onClick={() => {
                    EmployerLogin();
                  }}
                  className="bg-indigo-500 text-white py-2 px-3 rounded capitalize"
                >
                  create account
                </button>
              </div>
            </div>
          )}
          {role === "employee" && (
            <div className="border-2 my-8 border-indigo-300 shadow-lg w-5/6 md:w-1/3  mx-auto p-8 ">
              <span className="capitalize   text-start block  mb-5 text-indigo-500  text-2xl   ">
                Employee Login
              </span>
              <div>
                <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                  email name
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" block px-2 py-1 rounded  border  w-full my-2  outline-none "
                  placeholder="your email"
                />
              </div>
              <div>
                {" "}
                <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                  password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className=" outline-none block px-2 py-1 rounded  border  w-full my-2 "
                  placeholder="password"
                />
              </div>{" "}
              <div className="mt-3 ">
                {" "}
                <button
                  onClick={() => {
                    EmployeeLogin();
                  }}
                  className="bg-indigo-500 text-white py-2 px-3 rounded capitalize"
                >
                  create account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
