import React, { Component } from 'react';
import './App.css';
import NewRegistrationUser from './NewRegistrationUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={NewRegistrationUser}/>
        </Switch>
      </Router>
    )
  }
}

export default App;