import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import SignUpForm from '../components/SignUpForm';
import logoWordmark from './../img/universe-wordmark.svg';

class Modal extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0 mb-11">
        <div className="container-fluid text-center mx-auto">
          <a href="/" className="d-block mt-5 mb-3">
            <img
              className="brand-img"
              src={logoWordmark} 
              alt="Universe Labs Logo"
            />
          </a>
          <div className="text-center">
            <p className="font-weight-bold">
              The easiest way to access the new internet & web3.0.<br />
              Sign up on multiple blockchains.
            </p>
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
          <div className="shadow card col-md-8 mt-4 rounded"
            style={{
              maxWidth: '450px'
            }}>
            <div className="card-body">
              <div className="text-center mb-5">
                <p className="lead font-weight-bold">
                  Get started on the new web3.0.
                </p>
              </div>
              <SignUpForm />
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

export default Modal;
