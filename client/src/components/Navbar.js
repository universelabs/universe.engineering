import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarToggler from '../components/NavbarToggler';
import logoWordmark from './../img/universe-wordmark-white.svg';
import '../css/Navbar.css';

const Nav = styled.nav`
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background-color: transparent;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Div = styled.div`
  height: 70px;
`;

const Button = styled.a`
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Nav 
        className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logoWordmark} 
              className="navbar-brand-img" 
              alt="Universe Logo"/>
          </a>
          <NavbarToggler 
            className="d-flex align-items-right navbar-toggler-light"/>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <Div 
              className="
                container 
                d-flex 
                align-items-center 
                justify-content-center 
                d-md-none"
              style={{
                height: '45px'
              }}>
              <a 
                className="
                  navbar-brand 
                  d-flex 
                  align-items-center 
                  justify-content-center" 
                href="/"
                style={{
                marginRight: 0
              }}>
                <img
                  src={logoWordmark} 
                  className="navbar-brand-img" 
                  alt="Universe Logo"/>
              </a>
            </Div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/roadmap" >
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="mailto:support@universe.engineering?subject=Mail from Universe.engineering">
                  Contact
                </a>
              </li>
              <li className="nav-item d-md-none">
                <Button 
                  className="btn btn-sm btn-outline-light nav-button" 
                  href="/subscribe"
                  >
                  Subscribe
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
