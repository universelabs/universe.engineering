import React, { Component } from 'react';
import NavbarLight from '../components/NavbarLight';
import Hero from '../components/Hero';

// Using a ES6 class component as it contains state.
class Home extends Component {
  render() {
    return (
      <div>
        <NavbarLight colorScheme="navbar-light bg-light bg-white"/>
        <Hero />
      </div>
    );
  }
}

export default Home;
