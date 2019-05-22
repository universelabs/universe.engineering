import React, { Component } from 'react';

class SubscribeForm extends Component {
  render() {
    return (
      <form action="/subscribe" method="POST">
        <div className="form-group">
          <label htmlFor="email" className="d-none">
            Email address
          </label>
          <input
            name="email"
            type="text"
            id="email"
            className="form-control"
            placeholder="Email address"
            required={true}
            autoComplete="off"
            tabIndex="1"
            autoCapitalize="none"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Subscribe"
            tabIndex="4"
            className="btn btn-black btn-subscribe btn-block"
          />
        </div>
      </form>
    );
  }
}

export default SubscribeForm;
