import React, { Component } from 'react';
import styled from 'styled-components';
import Background from './../img/hero-background.png';


const Overlay = styled.div`
  background: url(${Background});
  background-size: cover;
  background-position: center;
  height: 565px;

  @media (min-width: 768px) {
    height: 780px;
  }
`;

const Lead = styled.p`
  font-size: 1.15rem;
  max-width: 550px;

  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0 hero"
        style={{
          marginTop: '-80px'
        }}>
        <div className="row no-gutters">
          <Overlay 
            className="
              container-fluid 
              d-flex 
              align-items-center 
              justify-content-center 
              text-white 
              p-4">
            <div className="container"
              style={{
                maxWidth: '900px'
              }}>
              <h1 className="text-center mt-5">
                Decentralized Web Accessibility
              </h1>
              <Lead 
                className="lead font-weight-normal text-center mx-auto mb-5">
                Universe is a blockchain agnostic, decentralized web accessibility node network.
              </Lead>
              <div className="text-center">
                <a
                  className="btn btn-light btn-block mx-auto mb-4c"
                  style={{
                    maxWidth: '280px',
                    color: '#0d0075'
                  }}
                  href="/subscribe" 
                  role="button"
                  tabIndex="1">
                  Subscribe
                </a>
                <p>Subscribe to our mailing list for upcoming releases, news & more...</p>
              </div>
            </div>
          </Overlay>
        </div>
      </div>
    );
  }
}

export default Header;
