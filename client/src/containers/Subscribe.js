import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import SubscribeForm from '../components/SubscribeForm';
import '../css/Subscribe.css';
import logoWordmark from './../img/universe-wordmark.svg';

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
          <div className="card col-md-8 mt-4c mt-md-6">
            <div className="card-body">
              <div className="text-center text-md-left mb-4">
                <a href="/" className="d-block mb-4 mb-md-4c">
                  <img
                    className="brand-img brand-img-md-pull-left"
                    src={logoWordmark} 
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
              </div>
              <SubscribeForm />
              <a
                className="btn btn-link btn-subscribe btn-block mx-auto mt-3"
                href="/" 
                role="button">
                Back to home
              </a>
              <div className="text-center small mt-9 mb-4">
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
