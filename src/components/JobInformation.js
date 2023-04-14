import React from "react";
import { useNavigate } from "react-router-dom";
export default function JobInformation({ job }) {
  let navigate = useNavigate();
  return (
    <div>
      {job.hasOwnProperty("companyName") ? (
        <div className="border w-1/3 mx-auto ">
          <span>More details</span>
          {job.title}
          {job.salary}
          {job.minexp}
          {job.jd}
          {job.type}
          {job.companyName}
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
