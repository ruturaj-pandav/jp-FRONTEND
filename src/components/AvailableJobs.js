import React from "react";
import { useNavigate } from "react-router-dom";
export default function AvailableJobs({ postings }) {
  let navigate = useNavigate();
  return (
    <div>
      <span className="block text-start capitlalize  my-3 text-3xl font-semibold ">
        Available jobs
      </span>
      <div className="grid grid-cols-3 gap-4">
        {postings.map((posting, index) => {
          return (
            <div className="p-3 border rounded  shadow-lg">
              <div className="text-start text-xl ">
                <span className="block capitalize text-xl font-bold ">
                  {posting.companyName}
                </span>
              </div>
              <div className=" flex justify-between my-2">
                <div className="block   uppercase     ">{posting.title}</div>
                <div className="block  border capitalize px-3 border-gray-100 rounded-full ">
                  {posting.type}
                </div>
              </div>
              <div className="my-3 ">
                <div className="text-start  my-1">
                  <span className="text-gray-500 capitalize ">
                    Min experience:{" "}
                  </span>
                  <span className="text-gray-500 text-lg font-bold mx-1 inline-block  ">
                    {posting.minexp} years
                  </span>
                </div>
                <div className="text-start  my-1">
                  <span className="text-gray-500 capitalize ">Salary: </span>
                  <span className="text-gray-500 text-lg font-bold mx-1 inline-block  ">
                    &#8377; {posting.salary}
                  </span>
                </div>
              </div>
              <div className="my-3 ">
                <button
                  onClick={() => {
                    navigate(`/job-information/${posting._id}`);
                  }}
                  className="w-full border text-white rounded bg-blue-500 capitalize  py-1 hover:bg-blue-600 duration-100 "
                >
                  view more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
