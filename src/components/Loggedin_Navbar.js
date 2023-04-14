import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
export default function Register() {
  let navigate = useNavigate();
  function LogoutFunction() {
    console.log("logging out");
    localStorage.removeItem("jobPortal");
    navigate(`/login`)
  }
  return (
    <div className="py-3 flex justify-between ">
      <div>
        <img className="h-12 w-12" src={Logo} alt="My Company Logo" />
      </div>
      {/* <div>links</div> */}
      <div>
        <button className="bg-green-400 text-white hover:bg-green-500 py-2 px-3 rounded mx-1 border duration-100 ">
          Profile
        </button>
        <button
          onClick={() => {
            LogoutFunction();
          }}
          className="bg-red-500 text-white hover:bg-red-600 py-2 px-3 rounded mx-1 border duration-100 "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
