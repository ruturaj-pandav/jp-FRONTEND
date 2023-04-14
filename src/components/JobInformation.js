import React from "react";
import { useNavigate } from "react-router-dom";
export default function JobInformation({ job }) {
  let navigate = useNavigate();
  return (
    <div>
      {job.hasOwnProperty("companyName") ? (
        <div className="border w-1/3 mx-auto px-3 py-3">
          <span className="block capitalize text-2xl font-semibold ">
            More details
          </span>
          <div className="border-t border-blue-500">
            {" "}
            <div className="my-2 text-start  capitalize font-semibold text-lg">
              {" "}
              <span> {job.companyName}</span>
            </div>
            <div className="my-1 text-start  capitalize  text-lg flex justify-between ">
              {" "}
              <span> {job.title}</span>
              <span className="text-base border border-gray-100 px-3 rounded-full text-gray-500">
                {" "}
                {job.type}
              </span>
            </div>
            <div className="my-2 text-start  capitalize font-semibold text-lg">
              {" "}
              <span className="text-gray-500 text-sm "> Salary : </span>
              <span> &#8377; {job.salary}</span>
            </div>
            <div className="my-2 text-start  capitalize font-semibold text-lg">
              {" "}
              <span className="text-gray-500 text-sm ">
                {" "}
                Minimum experience required :{" "}
              </span>
              <span> {job.minexp} years</span>
            </div>
            <div className="my-3 text-start ">
              <span className="block text-gray-400 text-sm  ">Job description</span>
              <span className="block ">{job.jd}</span>
            </div>
            <div className="my-3 text-start ">
              <span className="block text-gray-400 text-sm  ">Additional note</span>
              <span className="block ">{job.note}</span>
            </div>
            
            
          </div>
          <div className="my-3">
            <button
              onClick={() => {
                navigate(`/employee/apply/${job._id}`);
              }}
              class="bg-blue-500 text-white  py-1 px-2 rounded hover:bg-blue-600 duration-100  capitalize w-1/2 "
            >
              apply now
            </button>
          </div>
        </div>
      ) : (
        "loadingasdfasdfasdfasdfasdfasdfasdfasdfsdf"
      )}
    </div>
  );
}
