import React, { Component } from "react";
import YourApplications from "./YourApplications";
import Loggedin_Navbar from "./Loggedin_Navbar";
import AvailableJobs from "./AvailableJobs";
import axios from "axios";
export default class EmployeeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: [],
      applications: [],
    };
  }

  getAllPostings = async () => {
    console.log("getting postings ");
    try {
      let token = localStorage.getItem("jobPortal");

      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/general/all-postings`,
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("shayd postings mile");
        this.setState({ postings: response.data });
      }
    } catch (error) {
      console.log("some error : ", error.message);
    }
  };
  componentDidMount() {
    console.log("in cdm");
    this.getAllPostings();
  }
  render() {
    return (
      <div className="container mx-auto ">
        <Loggedin_Navbar />
        <AvailableJobs postings={this.state.postings} />
        <YourApplications applications={this.state.applications} />{" "}
      </div>
    );
  }
}
