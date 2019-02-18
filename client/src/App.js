import React, { Component } from 'react';
import Home from './containers/Home';
import Subscribe from './containers/Subscribe';
import SubscribeError from './containers/SubscribeError';
import SubscribeSuccess from './containers/SubscribeSuccess';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/subscribe-error" component={SubscribeError} />
          <Route path="/subscribe-success" component={SubscribeSuccess} />
        </div>
      </Router>
    );
  }
}

export default App;
