import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <form action="/subscribe" method="POST">
        <div className="form-group">
          <label htmlFor="firstName" className="d-none">
            First name
            <span className="font-italic">&nbsp;- Optional</span>
          </label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            className="form-control mb-2"
            placeholder="First name (optional)"
            autoComplete="off"
            tabIndex="1"
            aria-invalid="false"
            aria-controls="first-name"
            aria-label="What is your first name?"
            aria-activedescendant="first-name-item-0"
          />
          <label htmlFor="email" className="d-none">
            Email address
          </label>
          <input
            name="email"
            type="text"
            id="email"
            className="form-control mb-2"
            placeholder="Email address"
            required={true}
            autoComplete="off"
            tabIndex="2"
            autoCapitalize="none"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0"
          />
          <label htmlFor="password" className="d-none">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control mb-2"
            placeholder="Password"
            required={true}
            autoComplete="off"
            tabIndex="3"
            aria-invalid="false"
            aria-controls="password"
            aria-label="Choose a strong password."
            aria-activedescendant="password-item-0"
          />
          <label htmlFor="passphrase" className="d-none">
            Passphrase
          </label>
        </div>
        <div>
          <a
            className="btn btn-lg btn-black btn-subscribe btn-block"
            href="/dashboard"
            role="button"
            tabIndex="4"
          >
            Get started!
          </a>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
