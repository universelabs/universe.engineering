import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Roadmap extends Component {
  render() {
    return (
      <div>
        <Navbar 
          colorScheme="bg-dark"/>
        <div 
          className="container text-left mr-auto mb-8 pb-8"
          style={{
            maxWidth: '850px'
          }}>
          <h1 className="h1-editorial mb-4b">
            Universe Project Roadmap
          </h1>
          <p>
            The following is the Universe Project Roadmap defining the project, technology, goals, and future milestones.
          </p>
          <h3>
            Project Overview
          </h3>
          <p>
            Universe Labs' mission is to become the largest open source node and key management network.
          </p>
          <h3>
            Goals
          </h3>
          <ul>
            <li>
              Become the largest blockchain agnostic edge/node and key management network.
            </li>
            <li>
              Offer the best UX for dApp on-boarding and key management software.
            </li>
            <li>
              Build and maintain a required protocol for handling transactions across the network.
            </li>
            <li>
              Build a large community of open source developers contributing and building node modules and apps on the Universe node network.
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Roadmap;
