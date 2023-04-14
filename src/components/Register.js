import React from "react";
import Loggedout_Navbar from "./Loggedout_Navbar";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  const [role, setRole] = useState("employer");
  let roles = ["employer", "employee"];

  // employee details ;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // employer details

  const [mobile, setMobile] = useState("");
  const [companyName, setCompanyName] = useState("");

  //functions

  async function createEmployeeAccount() {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/employees/create-account`,
        { firstName, lastName, mobile, email, password }
      );
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
      swal({
        title: "Some error",
        text: error.response.data.message,
        icon: "error",
        button: "Ok!",
      });
    }
  }

  async function createEmployerAccount() {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/employers/create-account`,
        { firstName, lastName, companyName, email, password }
      );
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
      swal({
        title: "Some error",
        text: error.response.data.message,
        icon: "error",
        button: "Ok",
      });
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
                Please provide the details
              </span>
              <div className="grid grid-cols-2 gap-3 ">
                <div>
                  <label className="capitalize block  text-start text-gray-600 text-sm  my-1  ">
                    First name
                  </label>
                  <input
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="outline-none capitalize block px-2 py-1 rounded  border border-blue-200  w-full my-2 "
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                    Last name
                  </label>
                  <input
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className=" outline-none capitalize block px-2 py-1 rounded  border  w-full my-2 "
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className=" capitalize block  text-start text-gray-600 text-sm  my-1 ">
                  Company name
                </label>
                <input
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                  className="outline-none  block px-2 py-1 rounded  border  w-full my-2 "
                  placeholder="Company name"
                />
              </div>
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
                  type="password"
                  className=" outline-none block px-2 py-1 rounded  border  w-full my-2 "
                  placeholder="password"
                />
              </div>
              <div className="mt-3 ">
                {" "}
                <button
                  onClick={() => {
                    createEmployerAccount();
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
                Please provide the details
              </span>
              <div className="grid grid-cols-2 gap-3 ">
                <div>
                  <label className="capitalize block  text-start text-gray-600 text-sm  my-1  ">
                    First name
                  </label>
                  <input
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="outline-none capitalize block px-2 py-1 rounded  border border-blue-200  w-full my-2 "
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="capitalize block  text-start text-gray-600 text-sm  my-1 ">
                    Last name
                  </label>
                  <input
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className=" outline-none capitalize block px-2 py-1 rounded  border  w-full my-2 "
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label className=" capitalize block  text-start text-gray-600 text-sm  my-1 ">
                  mobile
                </label>
                <input
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  className="outline-none  block px-2 py-1 rounded  border  w-full my-2 "
                  placeholder="mobile"
                />
              </div>{" "}
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
                  type="password"
                  className=" outline-none block px-2 py-1 rounded  border  w-full my-2 "
                  placeholder="password"
                />
              </div>{" "}
              <div className="mt-3 ">
                {" "}
                <button
                  onClick={() => {
                    createEmployeeAccount();
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
