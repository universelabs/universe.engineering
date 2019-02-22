import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Roadmap extends Component {
  render() {
    return (
      <div>
        <Navbar colorScheme="bg-black"/>
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div className="container text-left mr-auto mb-8 pb-8"
            style={{
              maxWidth: '850px'
            }}>
            <h3 className="h1-editorial mb-4b">Universe Project Roadmap</h3>
            <p>
              The following is the Universe Project Roadmap defining the project, technology, goals, and future milestones.
            </p>
            <h5>Project Overview</h5>
            <p>
              Universe Labs' mission is to become the largest open source node and key management network.
            </p>
            <h5>Goals</h5>
            <ul>
              <li>Become the largest blockchain agnostic edge/node and key management network.</li>
              <li>Offer the best UX for dApp on-boarding and key management software.</li>
              <li>Build and maintain a required protocol for handling transactions across the network.</li>
              <li>Build a large community of open source developers contributing and building node modules and apps on the Universe node network.</li>
            </ul>
            <h5>Execution to date</h5>
            <p className="lead font-weight-bold">Universe Protocol (Blockchain)</p>
            <ul>
              <li>Universe Testnet v0.1.0-alpha. (Universe daemon & CLI).</li>
              <li>One-line Install script (Linux).</li>
            </ul>
            <p className="lead font-weight-bold">Universe Key Management / Node Software</p>
            <ul>
              <li>Universe Key Managemet Express/React Web App v0.6.0-alpha.</li>
              <li>Universe Meta Front-end Framework v1.2.0.</li>
            </ul>
            <h5>Milestones</h5>
            <ul>
              <li>Universe Key Management - Finish building out the key management web client.</li>
              <li>Universe Core - Universe Testnet v0.2.0-alpha (improving the design of the network for performance at the edges of the network).</li>
              <li>Universe Core - Image Builder for Raspberry Pi's.</li>
              <li>Universe Growth - Raspberry Pi hackathons to get developers building on Universe nodes.</li>
              <li>Universe Node - Launch the first Universe node device.</li>
              <li>Universe Growth - Distribute Universe nodes to dApp developers and dApp users.</li>
              <li>Universe Protocol - Design and develop a protocol that suites the needs of the developers and users.</li>
            </ul>
            <h5>Current Tech Stack</h5>
            <p><a href="https://github.com/universelabs/universe#status" alt="Universe status" target="_blank" rel="noopener noreferrer">› Universe Status</a> for the lastest status of the Universe Tech Stack and dependencies.</p>
            <ul>
              <li>Blockstack Auth</li>
              <li>Raspian Linux</li>
              <li>Raspberry Pi Hardware</li>
              <li>Node</li>
              <li>Express</li>
              <li>React</li>
              <li>Universe Meta (Universe's blockchain front-end framework)</li>
            </ul>
            <h5>Discovery</h5>
            <p>We have been polling and collecting data and talking to decentralized app developers on what issues they are facing the most.</p>
            <ul>
              <li>Users find it difficult to manage their keys.</li>
              <li>Develepers have a hard time on-boarding users and/or keeping users.</li>
              <li>Users do not want to go through the long process to sign up for an app.</li>
            </ul>
            <p>We've taken these findings to develop a strategy to assist decentralized systems in adoption.</p>
            <h5>Use Cases</h5>
            <p>Examples of what the network can be used for</p>
            <ul>
              <li>Similarly to the AOL in the 90's, On-board users with node devices that are always on device.</li>
              <li>User's key management to access all the blockchain networks.</li>
              <li>Compute, storage, bandwidth, staking, etc.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Roadmap;
