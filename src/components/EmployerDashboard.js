import React, { Component } from "react";
import YourPostings from "./YourPostings";
import Loggedin_Navbar from "./Loggedin_Navbar";
import axios from "axios";
export default class EmployeeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: [],
    };
  }
  getPostings = async () => {
    console.log("getting postings ");
    try {
      let token = localStorage.getItem("jobPortal");

      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/employers/employer-postings`,
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      );
      if (response.status === 200) {
        this.setState({ postings: response.data });
      }
    } catch (error) {
      console.log("some error : ", error.message);
    }
  };
  componentDidMount() {
    console.log("in cdm");
    this.getPostings();
  }
  render() {
    return (
      <div className="container  mx-auto ">
        {" "}
        <Loggedin_Navbar />
        <YourPostings
          postings={this.state.postings}
          getPostings={this.getPostings}
        />{" "}
      </div>
    );
  }
}
