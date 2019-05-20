import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import SignUpForm from '../components/SignUpForm';
import logoWordmark from './../img/universe-wordmark.svg';

class Modal extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0 mb-11">
        <div 
          className="
            container-fluid 
            text-center 
            mx-auto 
            d-none 
            d-md-block 
            mb-5
          ">
          <a href="/" className="d-block mt-5 mb-3">
            <img
              className="brand-img"
              src={logoWordmark} 
              alt="Universe Labs Logo"
            />
          </a>
          <div className="text-center">
            <div 
              className="
                font-weight-bold 
                mb-1
              ">
              The easiest way to access the new decentralized internet and 
              crypto.
            </div>
            <div className="font-weight-bold">
              Sign up on multiple platforms at once.
            </div>
          </div>
        </div>
        <div 
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div className="card col-md-8"
            style={{
              maxWidth: '515px'
            }}>
            <div className="card-body">
              <div className="text-center text-md-left mb-4">
                <a 
                  href="/" 
                  className="d-block d-md-none mb-4 mb-md-4c">
                  <img
                    className="brand-img brand-img-md-pull-left"
                    src={logoWordmark} 
                    alt="Universe Labs Logo"
                  />
                </a>
                <div className="text-center">
                  <div 
                    className="
                      font-weight-bold 
                      mb-1 
                      d-md-none
                    ">
                    The easiest way to access the new decentralized internet 
                    and crypto.
                  </div>
                  <div 
                    className="
                      font-weight-bold 
                      d-md-none 
                      mb-4b
                    ">
                    Sign up on multiple platforms at once.
                  </div>
                  <div 
                    className="
                      lead 
                      text-center 
                      mb-4c 
                      mt-md-3 
                      mb-md-5"
                    style={{
                      fontWeight: '800'
                    }}>
                    Sign-up & start using the NEW internet web 3.0.
                  </div>
                </div>
              </div>
              <SignUpForm />
              <a
                className="
                  btn 
                  btn-link 
                  btn-subscribe 
                  btn-block 
                  mx-auto 
                  mt-3"
                href="/" 
                role="button">
                Back to home
              </a>
              <div className="text-center mt-6 mb-2">
                <a
                  className="small font-weight-bold" 
                  href="/">
                  Terms and Conditions
                </a>
              </div>
              <div className="text-center small font-weight-bold mb-4">
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

export default Modal;
