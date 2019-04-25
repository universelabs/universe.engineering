import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <form action="/subscribe" method="POST">
        <div className="form-group mb-5">
          <label htmlFor="firstName" className="d-none">
            First name 
            <span className="font-italic">
              &nbsp;- Optional
            </span>
          </label>
          <input 
            name="firstName"
            type="text"
            id="firstName"
            className="form-control mb-3"
            placeholder="First name (optional)"
            autoComplete="off"
            tabIndex="1"
            aria-invalid="false"
            aria-controls="first-name"
            aria-label="What is your first name?"
            aria-activedescendant="first-name-item-0" />
          <label htmlFor="lastName" className="d-none">
            Last name
            <span className="font-italic">
              &nbsp;- Optional
            </span>
          </label>
          <input 
            name="lastName"
            type="text"
            id="lastName"
            className="form-control mb-3"
            placeholder="Last name (optional)"
            autoComplete="off"
            tabIndex="2"
            aria-invalid="false"
            aria-controls="last-name"
            aria-label="What is your last name?"
            aria-activedescendant="last-name-item-0" />
          <label htmlFor="email" className="d-none">
            Email address
          </label>
          <input 
            name="email"
            type="text"
            id="email"
            className="form-control mb-3"
            placeholder="Email address"
            required={true}
            autoComplete="off"
            tabIndex="3"
            autoCapitalize="none"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0" />
        </div>
        <p className="lead font-weight-bold text-center mb-5">
          Continue to quickly sign up on all major blockchains.
        </p>
        <div className="form-group mb-4b">
          <label htmlFor="username" className="d-none">
            Username
          </label>
          <input 
            name="username"
            type="text"
            id="username"
            className="form-control mb-3"
            placeholder="Username"
            required={true}
            autoComplete="off"
            tabIndex="4"
            aria-invalid="false"
            aria-controls="username"
            aria-label="Choose a username."
            aria-activedescendant="username-item-0" />
          <label htmlFor="password" className="d-none">
            Password
          </label>
          <input 
            name="password"
            type="password"
            id="password"
            className="form-control mb-3"
            placeholder="Password"
            required={true}
            autoComplete="off"
            tabIndex="5"
            aria-invalid="false"
            aria-controls="password"
            aria-label="Choose a strong password."
            aria-activedescendant="password-item-0" />
          <label htmlFor="passphrase" className="d-none">
            Passphrase
          </label>
          <textarea 
            name="passphrase"
            type="text"
            id="passphrase"
            rows="5"
            className="form-control"
            placeholder="Passphrase"
            required={true}
            autoComplete="off"
            tabIndex="6"
            autoCapitalize="none"
            aria-invalid="false"
            aria-controls="passphrase"
            aria-label="Choose a 12 word passphrase."
            aria-activedescendant="email-item-0" />
        </div>
        <div>
          <a
            className="btn btn-black btn-subscribe btn-block"
            href="/dashboard" 
            role="button"
            tabIndex="7">
            Get started!
          </a>
        </div>
        
      </form>
    );
  }
}

export default SignUpForm;