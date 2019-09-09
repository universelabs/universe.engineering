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
              <i>Last updated: Sep 9, 2019</i>
            </p>
            <p>
              The following is the Universe Project Roadmap defining the
              project, technology, goals, and future milestones.
            </p>
            <h5>Project Overview</h5>
            <p>
              Universe's mission is to become the world's largest decentralized login platform.
            </p>
            <h5>Goals</h5>
            <ul>
              <li>
                Decentralized Login (DLI) - Make login as secure as public key encryption and easier to use than passwords.
              </li>
              <li>
                Build out a strong and reliable core infrastructure and decentralized private key recovery protocol & network.
              </li>
              <li>
                Offer the best UX for private key management.
              </li>
              <li>
                Build and maintain software and a peer-to-peer protocol for handling transactions across the network.
              </li>
              <li>
                Build a large community of open source developers who contribute and integrate Universe's API & SDK.
              </li>
            </ul>
            <h5>Progress & Status</h5>
            <p className="lead font-weight-bold">
              Team
            </p>
            <p>We spent a couple months working on building a talented team of computer scientists, blockchain engineers, developers, designers and marketers.</p>
            <ul>
              <li>
                <span className="font-weight-black">Guy Lepage</span>, <i><span className="font-weight-black">Co-founder</span>, UX/UI Designer & Developer</i> (<a href="https://lepage.cc/about" alt="Guy Lepage Full Bio" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Full Bio&nbsp;</a>) – Guy was the 1st hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Blockstack PBC&nbsp;</a>, designer and 1 of 2 developers of the Blockstack browser. (assisted in the building of a company that raised over $53mm from USV, Naval Ravikant, Winklevoss', etc.).
              </li>
              <li>
                <span className="font-weight-black">Itamar Reif</span>, <i><span className="font-weight-black">Co-founder</span>, Protocol Engineer</i> – Itamar is a 3rd year student at NYU currently working towards a Joint Major in Computer Science & Economics. Focus/interest in distributed systems and algorithmic game theory.
              </li>
              <li>
                <span className="font-weight-black">Jacob Gadikian</span>, <i><span className="font-weight-black">Co-founder</span>, Blockchain & Hardware Engineer</i> – Tendermint/Cosmos blockchain developer. Formerly Co-founder of the Dawn Network, an early decentralized social network. Co-founder of bitcoin mine.
              </li>
              <li>
                <span className="font-weight-black">Modestos Kaffes</span>, <i>Front-End Engineer & Designer</i> – Ethereum DApp developer, Front-end software engineer with a strong design background and an eye for detail. 3+ yrs designer & engineer at Workable.
              </li>
              <li>
                <span className="font-weight-black">Charlotte Pan</span>, <i>UX & Product</i> – UX & Product Designer with a passion for data visualization, front-end development, and designing products that make users’ lives easier.
              </li>
              <li>
                <span className="font-weight-black">Sean O’Connor</span>, <i>Marketing & Product</i> – ConsenSys Product Marketer. Launched several consumer-facing DApps. Recently, Sean has been focused on improving Web3 UX and Advisor at Parsons School of Design.
              </li>
            </ul>
            <p className="lead font-weight-bold">
              Project Status
            </p>
            <p>We've worked on defining a fully decentralized login and decentralized private key recovery protocol architecture. We are about to launch our decentralized login and move out of alpha into beta with our web app. In coming weeks users will be able to login with a simple click of a button on various Web 3.0 and Web 2.0 platforms and applications. Lastly, we have started building out our beta blockchain with utility token to bootstrap the network.</p>
            <h5>Milestones</h5>
            <ul>
              <li>
                Universe Key Management - Finish building out authentication on the key management web client.
              </li>
              <li>
                Universe Network - Cosmos-SDK blockchain for the Universe Network.
              </li>
              <li>
                Universe Growth - A code snippet that developers can use to integrate DLI.
              </li>
              <li>
                Universe Growth - Hackathons to get developers building on Universe DLI.
              </li>
              <li>
                Universe Peer-to-Peer Storage - Design and develop a peer-to-peer storage system for decentralization of keys.
              </li>
            </ul>
            <h5>Links</h5>
            <ul>
              <li>
                <a href="https://github.com/universelabs/universe" alt="Universe (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Universe (GitHub)&nbsp;</a>
              </li>
              <li>
                <a href="https://github.com/universelabs/universe-core" alt="Universe Core (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Universe Core (GitHub)&nbsp;</a>
              </li>
              <li>
                <a href="https://github.com/universelabs/universe-webapp" alt="Universe Key Management Web App (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Universe Key Management Web App (GitHub)&nbsp;</a>
              </li>
              <li>
                <a href="https://github.com/universelabs/universe-key-manager" alt="Universe Key Manager (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Universe Key Manager (GitHub)&nbsp;</a>
              </li>
              <li>
                <a href="https://github.com/universelabs/meta" alt="Meta (Blockchain framework w/ 3,600+ downloads)" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Meta (Blockchain framework w/ 3,600+ downloads)&nbsp;</a>
              </li>
              <li>
                <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE" alt="Community (Slack)" target="_blank" rel="noopener noreferrer" className="bg-black text-light">&nbsp;Community (Slack)&nbsp;</a>
              </li>
            </ul>
            <h5>Possible Future Technology</h5>
            <ul>
              <li>
                Mobile hardware device for added user security
              </li>
              <li>
                Stationary hardware node for added key backup capabilities
              </li>
            </ul>
            <h5>Partnerships</h5>
            <ul>
              <li>
                To be announced.
              </li>
            </ul>
            <h5>Fundraising</h5>
            <ul>
              <li>
                To be announced.
              </li>
            </ul>
            <h5>Current Tech Stack</h5>
            <ul>
              <li>
                Bitcoin
              </li>
              <li>
                Ethereum
              </li>
              <li>
                Blockstack
              </li>
              <li>
                Cosmos-SDK
              </li>
              <li>
                C++
              </li>
              <li>
                Go
              </li>
              <li>
                Raspian Linux
              </li>
              <li>
                Raspberry Pi Hardware
              </li>
              <li>
                ESP32 Feather Hardware
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
                Meta (Universe's blockchain front-end framework)
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
