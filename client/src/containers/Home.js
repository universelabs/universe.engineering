import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Using a ES6 class component as it contains state.
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar colorScheme="navbar-dark bg-dark bg-black" />
        <Hero />
        <Footer
          style={{
            backgroundColor: '#000'
          }}/>
      </div>
    );
  }
}

export default Home;
