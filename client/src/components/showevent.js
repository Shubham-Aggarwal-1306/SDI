import React, { Component } from 'react';
import '../App.css';
import { withRouter, Link} from "react-router-dom";
import axios from 'axios';

const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class ShowEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: {},
    };
  }

  componentDidMount() {
    const name = this.props.match.params.name;
    axios
      .get('http://localhost:8082/api/events/'+  name)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          Event: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowEventDetails");
      })
      console.log("Print-showBookDetails-API-response: " + this.state.Event);
  };


  render() {
    const onClick = (e) => {
      e.preventDefault();
      console.log("clicked");
    };
    
    const Event = this.state.Event;
    const date = new Date(Event.event_date);
    let EventItem = <div>
          <img src= {Event.banner} alt="i" style = {{height:'25vh', width: '100vw'}}/>
          <div className="p-2 d-flex py-3">
            <div className="row">
              <div className="col-8">
                <div className="h5">
                  {Event.name}
                </div>
                <div>
                {Event.S_description}
                </div>
                <div className="my-5">
                  <div className="h5">
                    What will you get?
                  </div>
                  <div>
                  {Event.description}
                  </div>
                </div>
              </div>
              <div className="col-4">
              </div>
            </div>
            <div className="w-50 m-4 bg-black detail-box px-3 rounded rounded-5 d-flex flex-column align-self-center">
              <div className="text-center bg-white rounded-bottom px-5 align-self-center">
                <i className="fa-regular fa-calendar fa-2x text-primary" />
                <div className="fw-bold">
                {date.getDate()}
                </div>
                <div className="fw-bold">
                {month_names_short[date.getMonth()]}
                </div>
              </div>
              <div className="p-2 mt-2 mb-4">
                <div className="mb-3 fw-bold">
                  <i className="fa-regular fa-clock text-primary me-2" />
                  {Event.event_time}
                </div>
                <div className="text-primary mb-3 fw-bold">
                  <i className="fa-solid fa-video text-primary me-2" />
                  <a href={Event.link}>
                    Link
                  </a>
                </div>
                <div className="text-success mb-3 fw-bold">
                  <i className="fa-regular fa-dollar-sign  text-primary me-2" />
                  {Event.price}
                </div>
                <div className="fw-bold">
                  Duration: {Event.duration} minutes
                </div>
              </div>
            </div>
          </div>
        </div>
        return (
          <div>
            { EventItem }
          </div>
       );
      }
    }
    


  export default withRouter(ShowEvent);