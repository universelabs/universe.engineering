import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Roadmap extends Component {
  render() {
    return (
      <div>
        <Navbar 
          colorScheme="
            navbar-dark 
            bg-dark 
            bg-black" 
            />
        <div 
          style={{ 
            marginLeft: '6px', 
            marginRight: '6px' 
          }}>
          <div 
            className="
              container 
              text-left 
              mr-auto 
              mb-8 
              pb-8"
            style={{
              maxWidth: '800px'
            }}>
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
              Universe's mission is to become the easiest and most used key recovery solution.
            </p>
            <h5>Goals</h5>
            <ul>
              <li className="pb-2">
                Build out a strong and reliable core infrastructure and decentralized private key recovery protocol & network.
              </li>
              <li className="pb-2">
                Offer the best UX for private key management.
              </li>
              <li className="pb-2">
                Build and maintain software and a peer-to-peer protocol for handling transactions across the network.
              </li>
              <li className="pb-2">
                Build a large community of open source developers who contribute and integrate Universe's API & SDK.
              </li>
            </ul>
            <h5>Progress & Status</h5>
            <p className="lead font-weight-black">
              Team
            </p>
            <p>We spent a couple months working on building a talented team of computer scientists, blockchain engineers, developers, designers and marketers.</p>
            <ul>
              <li className="pb-2">
                <span className="font-weight-black">Guy Lepage</span>, <i><span className="font-weight-black">Co-founder</span>, UX/UI Designer & Developer</i> (<a href="https://lepage.cc/about" alt="Guy Lepage Full Bio" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Bio</a>) – Guy was the 1st hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Blockstack PBC</a>, designer and 1 of 2 developers of the first <a href="https://github.com/blockstack/blockstack-browser/graphs/contributors" alt="Blockstack Browser" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Blockstack Browser</a>. (assisted in the raising of over <a href="https://venturebeat.com/2017/12/04/blockstack-raises-52-million-to-build-a-parallel-internet-where-you-own-all-your-data/" alt="$50mm in a token distribution" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">$50mm in a token distribution</a> from investors such as USV, Naval Ravikant, Winklevoss', etc.).
              </li>
              <li className="pb-2">
                <span className="font-weight-black">Itamar Reif</span>, <i><span className="font-weight-black">Co-founder</span>, Protocol Engineer</i> – Itamar is a C++ computer scientist and 3rd year student at NYU currently working towards a Joint Major in Computer Science & Economics. Focus/interest in distributed systems and algorithmic game theory.
              </li>
              <li className="pb-2">
                <span className="font-weight-black">Jacob Gadikian</span>, <i><span className="font-weight-black">Co-founder</span>, Blockchain & Hardware Engineer</i> – <a href="https://tendermint.com/" alt="Tendermint" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Tendermint</a>/<a href="https://cosmos.network/" alt="Cosmos" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Cosmos</a> blockchain developer. Formerly Co-founder of the <a href="https://github.com/dawn-network" alt="Dawn Network" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Dawn Network</a>, an early decentralized social network. Co-founder of bitcoin mine.
              </li>
              <li className="pb-2">
                <span className="font-weight-black">Charlotte Pan</span>, <i>UX & Product</i> – UX & Product Designer with a passion for data visualization, front-end development, and designing products that make users’ lives easier.
              </li>
              <li className="pb-2">
                <span className="font-weight-black">Sean O’Connor</span>, <i>Marketing & Product</i> – <a href="https://consensys.net/" alt="ConsenSys" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">ConsenSys</a> Product Marketer. Launched several consumer-facing DApps. Recently, Sean has been focused on improving Web 3.0 UX and Advisor at Parsons School of Design.
              </li>
            </ul>
            <p className="lead font-weight-black">
              Project Status
            </p>
            <p>We've worked on defining a fully decentralized login and decentralized private key recovery protocol architecture. We are about to launch our decentralized login and move out of alpha into beta with our web app. In coming weeks users will be able to login with a simple click of a button on various Web 3.0 and Web 2.0 platforms and applications. Lastly, we have started building out our beta blockchain with utility token to bootstrap the network.</p>
            <h5>Milestones</h5>
            <ul>
              <li className="pb-2">
                Universe Key Management - Finish building out authentication on the key management web client.
              </li>
              <li className="pb-2">
                Universe Network - Cosmos-SDK blockchain for the Universe Network.
              </li>
              <li className="pb-2">
                Universe Growth - A code snippet that developers can use to integrate DLI.
              </li>
              <li className="pb-2">
                Universe Growth - Hackathons to get developers building on Universe DLI.
              </li>
              <li className="pb-2">
                Universe Peer-to-Peer Storage - Design and develop a peer-to-peer storage system for decentralization of keys.
              </li>
            </ul>
            <h5>Links</h5>
            <ul>
              <li className="pb-2">
                <a href="https://github.com/universelabs/universe" alt="Universe (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Universe (GitHub)</a>
              </li>
              <li className="pb-2">
                <a href="https://github.com/universelabs/universe-core" alt="Universe Core (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Universe Core (GitHub)</a>
              </li>
              <li className="pb-2">
                <a href="https://github.com/universelabs/universe-webapp" alt="Universe Key Management Web App (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Universe Key Management Web App (GitHub)</a>
              </li>
              <li className="pb-2">
                <a href="https://github.com/universelabs/universe-key-manager" alt="Universe Key Manager (GitHub)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Universe Key Manager (GitHub)</a>
              </li>
              <li className="pb-2">
                <a href="https://github.com/universelabs/meta" alt="Meta (Blockchain framework w/ 3,600+ downloads)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Meta (Blockchain framework w/ 3,600+ downloads)</a>
              </li>
              <li className="pb-2">
                <a href="https://slack.universe.engineering" alt="Community (Slack)" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Community (Slack)</a>
              </li>
            </ul>
            <h5>Possible Future Technology</h5>
            <ul>
              <li className="pb-2">
                Mobile hardware device for added user security
              </li>
              <li className="pb-2">
                Stationary hardware node for added key backup capabilities
              </li>
            </ul>
            <h5>Partnerships</h5>
            <ul>
              <li className="pb-2">
                To be announced.
              </li>
            </ul>
            <h5>Fundraising</h5>
            <ul>
              <li className="pb-2">
                To be announced.
              </li>
            </ul>
            <h5>Current Tech Stack</h5>
            <ul>
              <li className="pb-2">
                Bitcoin
              </li>
              <li className="pb-2">
                Ethereum
              </li>
              <li className="pb-2">
                Blockstack
              </li>
              <li className="pb-2">
                Cosmos-SDK
              </li>
              <li className="pb-2">
                C++
              </li>
              <li className="pb-2">
                Go
              </li>
              <li className="pb-2">
                Raspian Linux
              </li>
              <li className="pb-2">
                Raspberry Pi Hardware
              </li>
              <li className="pb-2">
                ESP32 Feather Hardware
              </li>
              <li className="pb-2">
                Node
              </li>
              <li className="pb-2">
                Express
              </li>
              <li className="pb-2">
                React
              </li>
              <li className="pb-2">
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
