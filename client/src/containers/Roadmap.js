import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Roadmap extends Component {
  render() {
    return (
      <div>
        <Navbar colorScheme="navbar-dark bg-dark bg-black" />
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div className="container text-left mr-auto mb-8 pb-8">
            <h3 className="h1-editorial mb-4b">Universe Project Roadmap</h3>
            <p>
              <i>Last updated: Aug 25, 2019</i>
            </p>
            <p>
              The following is the Universe Project Roadmap defining the
              project, technology, goals, and future milestones.
            </p>
            <h5>Project Overview</h5>
            <p>
              Universe's mission is to become the largest login platform.
            </p>
            <h5>Goals</h5>
            <ul>
              <li>
                Abstraction of private key, key assets, passwords and usernames on both the traditional web2.0 and NEW decentralized web3.0 for end users.
              </li>
              <li>
                Become the largest blockchain agnostic edge/node and key management network.
              </li>
              <li>
                Offer the best UX for DApp key management.
              </li>
              <li>
                Build and maintain software, hardware, and a peer-to-peer protocol for handling transactions across the network.
              </li>
              <li>
                Build a large community of open source developers who contribute and integrate Universe's API & SDK.
              </li>
            </ul>
            <h5>Execution to date</h5>
            <p className="lead font-weight-bold">
              Universe Key Management Software
            </p>
            <ul>
              <li>
                Web App (v1.0.1-alpha.1) - Key management interface where users can sign up and use the copy/paste functionality to recover a Blockstack account.</li>
              <li>Key Management Server & Storage (v1.0.0-alpha) - Universe's key management server and storage/keystore built in Go.</li>
            </ul>
            <p className="lead font-weight-bold">
              Universe Mobile Device
            </p>
            <ul>
              <li>
                Mobile Device (v0.3.1-alpha) – A tiny Bluetooth device that caches a user's vault, acting as its decryption key to serve the web app.
              </li>
            </ul>
            <p className="lead font-weight-bold">
              Universe Stationary Node
            </p>
            <ul>
              <li>
                Stationary Node (v0.1.1-alpha) – A "home node" that will be used as cold storage, either locally or by interacting with a decentralized peer-to-peer storage swarm.
              </li>
            </ul>
            <p className="lead font-weight-bold">
              Universe Frontend Software
            </p>
            <ul>
              <li>
                Universe Meta (v1.7.8) - A front-end blockchain framework w/ 3,000+ downloads.
              </li>
            </ul>
            <h5>Milestones</h5>
            <ul>
              <li>
                Universe Key Management - Finish building out authentication on the key management web client.
              </li>
              <li>
                Universe Mobile Device - Build out Universe Mobile client software.
              </li>
              <li>
                Universe Stationary Node - Image Builder for Raspberry Pi's.
              </li>
              <li>
                Universe Growth - Raspberry Pi hackathons to get developers building on Universe nodes.
              </li>
              <li>
                Universe Growth - Distribute Universe mobile devices and stationary nodes to DApp developers and DApp users.
              </li>
              <li>
                Universe Peer-to-Peer Storage - Design and develop a peer-to-peer storage system for decentralization of keys.
              </li>
            </ul>
            <h5>Current Tech Stack</h5>
            <ul>
              <li>
                C++
              </li>
              <li>
                GoLang
              </li>
              <li>
                Blockstack Auth
              </li>
              <li>
                Raspian Linux
              </li>
              <li>
                Raspberry Pi Hardware
              </li>
              <li>
                Node
              </li>
              <li>
                Express
              </li>
              <li>
                React
              </li>
              <li>
                Universe Meta (Universe's blockchain front-end framework)
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Roadmap;
