import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function YourPostings({ postings , getPostings }) {
  let navigate = useNavigate();

  async function deletePosting(postingId) {
    console.log("deleting posting");
    try {
      let token = localStorage.getItem("jobPortal");
      let response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/employers/delete-posting/${postingId}`,
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      );
      if (response) {
        if (response.status === 200) {
          getPostings();
        }
      }
    } catch (error) {
      console.log("some error here");
    }
  }
  return (
    <div>
      {" "}
      <div className="flex flex-row-reverse container mx-auto my-8">
        <button
          onClick={() => {
            navigate(`/employer/post-a-job`);
          }}
          class="capitalize px-8 py-2 bg-blue-500 text-white rounded text-lg"
        >
          post a job
        </button>
      </div>
      <span className="block text-start   my-3 text-lg font-bold ">
        These are the jobs that you have posted
      </span>
      <div className="grid grid-cols-3 gap-3 ">
        {postings.map((posting, index) => {
          return (
            <div className=" my-1 shadow hover:shadow-lg rounded-4 border-gray-100 border  py-2 px-5 ">
              <div className="flex justify-between my-2">
                <span className="capitalize  ">{posting.title}</span>
                <span className="text-gray-500 text-sm border py-1 px-3 rounded-full capitalize ">
                  {posting.type}
                </span>
              </div>
              <div className="flex justify-between my-2">
                <button className="border-blue-400 py-1  rounded bg-blue-500 text-white w-4/6 text-center capitalize hover:bg-blue-600">
                  view more
                </button>
                <button
                  onClick={() => {
                    deletePosting(posting._id);
                  }}
                  className="text-white bg-red-500 rounded py-1 w-2/6 mx-1 capitalize  "
                >
                  delete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
