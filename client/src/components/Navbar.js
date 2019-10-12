import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarToggler from '../components/NavbarToggler';
import logoWordmarkLight from './../img/universe-wordmark-white.svg';

const Nav = styled.nav`
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Div = styled.div`
  height: 45px;
`;

class Navbar extends Component {
  render() {
    return (
      <Nav
        className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}
        >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logoWordmarkLight}
              className="navbar-brand-img"
              alt="Universe Logo"
            />
          </a>
          <NavbarToggler className="d-flex align-items-right navbar-toggler-light" />
          <div className="collapse navbar-collapse" id="navbarBasic">
            <Div
              className="
                container 
                d-flex 
                align-items-center 
                justify-content-center 
                d-md-none"
              >
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
                  src={logoWordmarkLight}
                  className="navbar-brand-img"
                  alt="Universe Logo"
                />
              </a>
            </Div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a
                  className="
                    btn 
                    btn-sm 
                    btn-outline-white 
                    rounded-pill 
                    nav-button"
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
