import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateEvent extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      banner: "",
      S_description: "",
      description: "",
      language: "",
      event_date: "",
      event_time: "",
      link: "",
      price: "",
      duration: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.eventName,
      banner: this.state.eventBanner,
      S_description: this.state.eventShortDescription,
      description: this.state.eventDescription,
      language: this.state.eventLanguage,
      event_date: this.state.eventDate,
      event_time: this.state.eventTime,
      link: this.state.eventLink,
      price: this.state.eventPrice,
      duration: this.state.eventDuration,
    };

    axios
      .post("/api/events/", data)
      .then((res) => {
        this.setState({
          name: "",
          banner: "",
          S_description: "",
          description: "",
          language: "",
          event_date: "",
          event_time: "",
          link: "",
          price: "",
          duration: "",
        });
        this.props.history.push("/create-event");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  render() {
    
    return (
      
      <div className="px-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link
              to="/"
              className="nav-item me-auto text-primary fw-bold"
              href="/"
            >
              <i className="fa-solid fa-arrow-left me-3" />
              Back
            </Link>
            <div>
              <Link
                to={"/show-event/" + this.state.eventName}
                className="btn btn-outline-danger rounded-pill"
              >
                Preview Page
              </Link>
            </div>
          </div>
        </nav>
        <div className="px-2">
          <div className="text-muted fw-bold">Create Event</div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="row  justify-content-start">
              <div className="col-6">
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    id="eventName"
                    name="eventName"
                    placeholder="Event Name"
                    value={this.state.eventName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    id="eventBanner"
                    name="eventBanner"
                    placeholder="Banner"
                    value={this.state.eventBanner}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    id="eventShortDescription"
                    name="eventShortDescription"
                    placeholder="Short Description"
                    value={this.state.eventShortDescription}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group my-4">
                  <textarea
                    className="form-control"
                    id="eventDescription"
                    name="eventDescription"
                    placeholder="Please describe your service..."
                    rows={3}
                    defaultValue={""}
                    value={this.state.eventDescription}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group  py-2">
                  <select
                    id="eventLanguage"
                    className="form-control"
                    name="eventLanguage"
                    value={this.state.eventLanguage}
                    onChange={this.onChange}
                  >
                    <option className="text-muted" value disabled selected>
                      Choose Language
                    </option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div className="form-group  py-2">
                  <select
                    id="eventPrice"
                    className="form-control"
                    name="eventPrice"
                    value={this.state.eventPrice}
                    onChange={this.onChange}
                  >
                    <option className="text-muted" value>
                      Price (in INR)
                    </option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
                <div className="form-group py-2">
                  <input
                    type="time"
                    className="form-control"
                    id="eventTime"
                    name="eventTime"
                    placeholder="Duration"
                    value={this.state.eventTime}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group py-2">
                  <input
                    type="text"
                    className="form-control"
                    id="eventDuration"
                    name="eventDuration"
                    placeholder="Duration"
                    value={this.state.eventDuration}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group  py-2">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Choose Date"
                    id="eventDate"
                    name="eventDate"
                    value={this.state.eventDate}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group py-2">
                  <input
                    type="text"
                    className="form-control"
                    id="eventLink"
                    name = "eventLink"
                    placeholder="Event Link"
                    value={this.state.eventLink}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="text-center p-4">
                <input
                  type="submit"
                  className="btn btn-outline-danger rounded-pill"
                  placeholder="Save"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
