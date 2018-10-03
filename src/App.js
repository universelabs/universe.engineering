import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div 
          style={{
            paddingTop: '40px'
          }}>
        </div>
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
