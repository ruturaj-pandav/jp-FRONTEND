import React, { Component } from "react";
import axios from "axios";
import JobInformation from "./JobInformation";
import Loggedin_Navbar from "./Loggedin_Navbar";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postingId: window.location.href.split("/")[4],
      job: [],
    };
  }
  getJobInformation = async () => {
    console.log("getting postings ");
    try {
      let token = localStorage.getItem("jobPortal");
      console.log("this is postingID : ", this.state.postingId);

      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/employees/posting-information/${this.state.postingId}`,
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("ye job mila : " , response.data)
        this.setState({ job: response.data });
      }
    } catch (error) {
      console.log("some error : ", error.message);
    }
  };
  componentDidMount() {
    console.log("in cdm");
    this.getJobInformation();
  }
  render() {
    return (
      <div className="container mx-auto">
        <Loggedin_Navbar />
        <JobInformation job=  {this.state.job}/>
      </div>
    );
  }
}
