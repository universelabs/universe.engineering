import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmark from './../img/universe-wordmark.svg';

class MailerError extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 
            pr-0"
          >
          <div className="card col-md-8 mt-4c mt-md-6">
            <div className="card-body">
              <div className="text-center mb-4">
                <a href="/" className="d-block mb-4 mb-md-4b">
                  <img
                    className="brand-img"
                    src={logoWordmark}
                    alt="Universe Labs Logo"
                  />
                </a>
                <p className="lead-md font-weight-bold">:(&nbsp;&nbsp;Sorry</p>
                <p>Something went wrong. Please go back and try again.</p>
                <p className="mb-4b">
                  Alternatively, you can email{' '}
                  <a
                    href="mailto:support@universe.engineering?subject=Mail from Universe.engineering"
                    alt="Email: support@universe.engineering"
                    className="bg-black text-light mx-1"
                    >
                    &nbsp;here&nbsp;
                  </a>
                  .
                </p>
                <a
                  className="btn btn-primary btn-subscribe mx-auto"
                  style={{
                    textDecoration: 'none',
                    maxWidth: '280px'
                  }}
                  href="/contact"
                  role="button"
                  tabIndex="1"
                  >
                  Back
                </a>
              </div>
              <div 
                className="
                  text-center 
                  small 
                  mt-9 
                  mb-4"
                >
                <CopyrightUpdate
                  style={{
                    display: 'inline-block'
                  }}/>
                  &nbsp;Universe Labs Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailerError;
