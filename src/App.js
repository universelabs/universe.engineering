import React, { Component } from 'react';
import Header from './components/Header';
import './styles/Universe.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div className="mb-auto"
          style={{
            paddingTop: '65px'
          }}>
        </div>
        <main role="main" className="mx-auto text-center content-hero"
          style={{
            maxWidth: '685px'
          }}>
          <h1 className="display-3 text-white font-weight-bold">
            Universe
          </h1>
          <div className="lead text-white-50">
            Universe is a blockchain agnostic dApp solutions community
          </div>
        </main>
        <div className="mt-auto">
        </div>
      </div>
    );
  }
}

export default App;
