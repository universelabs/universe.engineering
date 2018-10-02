import React, { Component } from 'react';
import Header from './components/Header';
import Header from './components/Hero';
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
        <Hero />
        <div className="mt-auto">
        </div>
      </div>
    );
  }
}

export default App;
