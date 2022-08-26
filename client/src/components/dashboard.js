import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="w-25 d-flex flex-column bg-dark px-4 py-4" style={{height: '100vh'}}>
          <div className="p-3 bg-danger text-white rounded h6">Dashboard</div>
        </div>
        <div className="w-75 p-4">
          <div className="h4">Welcome Ravi</div>
          <div className="h4 text-muted font-weight-bolder">
            Lorem ispum is dummy text
          </div>

          <Link to="/create-event" className="d-flex my-5">
            <div className="d-flex align-items-center align-content-center p-3 border rounded w-50">
              <div className="rounded-circle border border-dark border-4 align-content-center px-2 py-1 me-3">
                <i className="fas fa-plus" />
              </div>
              <div className="h5">Add Event</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
