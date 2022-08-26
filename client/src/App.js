import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import CreateEvent from './components/createevent';
import ShowEvent from './components/showevent';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path='/' component={Dashboard} />
          <Route path='/create-event' component={CreateEvent} />
          <Route path='/show-event/:name' component={ShowEvent}/>
        </div>
      </Router>
    );
  }
}

export default App;