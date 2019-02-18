import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarToggler from '../components/NavbarToggler';
import logo from './../img/universe-logo-white.svg';
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

class Navbar extends Component {
  render() {
    return (
      <Nav 
        className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo} 
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
                d-md-none">
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
                  src={logo} 
                  className="navbar-brand-img" 
                  alt="Universe Logo"/>
              </a>
            </Div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="mailto:support@universe.engineering?subject=Mail from Universe.engineering">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="btn btn-sm btn-primary nav-button" 
                  href="/subscribe"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
