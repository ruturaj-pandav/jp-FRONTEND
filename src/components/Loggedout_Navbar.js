import React from "react";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  return (
    <div className="py-3 flex justify-between container mx-auto ">
      <div>
        <img className="h-8 w-8" src={Logo} alt="My Company Logo" />
      </div>
      <div>
        <span
          onClick={() => {
            navigate(`/`);
          }}
          className="inline-block mx-4 text-gray-500 hover:text-gray-600 duration-100  cursor-pointer hover:scale-105"
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate(`/about`);
          }}
          className="inline-block mx-4 text-gray-500 hover:text-gray-600 duration-100  cursor-pointer hover:scale-105"
        >
          About
        </span>
        <span
          onClick={() => {
            navigate(`/contact-us`);
          }}
          className="inline-block mx-4 text-gray-500 hover:text-gray-600 duration-100  cursor-pointer hover:scale-105"
        >
          Contact us
        </span>
      </div>
      <div>
        <button
          onClick={() => {
            navigate(`/register`);
          }}
          className="border-1 text-pink-500 border-indigo-500 capitalize border mx-1 px-4 py-1 rounded text-lg font-semibold "
        >
          Create new account
        </button>
        <button
          onClick={() => {
            navigate(`/login`);
          }}
          className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  capitalize border mx-1 px-4 py-1 rounded text-lg font-semibold "
        >
          Login
        </button>
      </div>
    </div>
  );
}
