import React, { Component } from 'react';
import styled from 'styled-components';
import Background from './../img/hero-background.png';


const Overlay = styled.div`
  background: url(${Background});
  background-size: cover;
  background-position: center;
  height: 625px;

  @media (min-width: 768px) {
    height: 800px;
  }
`;

const Heading = styled.h1`
  margin-bottom: 18px;

  @media (max-width: 575.98px) {
    font-size: 9.5vw;
  }
`;

const Lead = styled.p`
  font-size: 1.1rem;
  max-width: 550px;
  margin-bottom: 32px;

  @media (min-width: 576px) {
    font-size: 1.25rem;
    margin-bottom: 48px;
  }
`;

const Button = styled.a`
  margin-bottom: 32px;

  @media (min-width: 576px) {
    margin-bottom: 40px;
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
              text-white">
            <div className="container my-auto"
              style={{
                maxWidth: '900px'
              }}>
              <Heading className="display-4 text-center mt-7">
                Decentralized Web Accessibility
              </Heading>
              <Lead
                className="lead font-weight-normal text-center mx-auto">
                Universe is a blockchain agnostic, decentralized web accessibility node network.
              </Lead>
              <div className="text-center">
                <Button
                  className="btn btn-light btn-block mx-auto"
                  style={{
                    maxWidth: '280px',
                    color: '#0d0075'
                  }}
                  href="/subscribe" 
                  role="button"
                  tabIndex="1">
                  Subscribe
                </Button>
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
