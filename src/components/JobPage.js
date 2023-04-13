import React, { Component } from "react";
import axios from "axios";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postingId: 32,
      job: [],
    };
  }
  getJobInformation = async () => {
    console.log("getting postings ");
    try {
      let token = localStorage.getItem("jobPortal");
      console.log("this is postingID : ", this.state.postingId);

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
    this.getJobInformation();
  }
  render() {
    return <div> Job page </div>;
  }
}
