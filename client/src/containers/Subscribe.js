import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import SubscribeForm from '../components/SubscribeForm';
import '../css/Subscribe.css';
import logo from './../img/universe-wordmark.svg';

const Div = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Using a ES6 class component as it contains state.
class Subscribe extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div 
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div className="card col-md-8">
            <div className="card-body">
              <Div className="mb-4">
                <a href="/" className="brand">
                  <img
                    className="brand-img"
                    src={logo} 
                    alt="Universe Labs Logo"
                    style={{ marginLeft: '-7px' }}
                  />
                </a>
                <p className="lead font-weight-bold">
                  Universe is a decentralized web accessibility node network.
                </p>
                <p>
                  Subscribe to our mailing list for upcoming releases, news & more...
                </p>
              </Div>
              <SubscribeForm />
              <a
                className="btn btn-link btn-subscribe btn-block mx-auto"
                style={{
                  textDecoration: 'none',
                  maxWidth: '280px',
                  marginTop: '16px'
                }}
                href="/" 
                role="button">
                Back to home
              </a>
              <div className="text-center small letter-space mt-9 mb-4">
                <CopyrightUpdate 
                  style={{
                    display: 'inline-block'
                  }}
                />
                &nbsp;Universe Labs Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
