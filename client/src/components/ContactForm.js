import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form action="/send-email" method="POST">
        <div className="form-group">
          <label htmlFor="firstName">
            First name 
            <span className="font-italic">
              &nbsp;- Optional
            </span>
          </label>
          <input 
            name="firstName"
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First name (optional)"
            autoComplete="off"
            tabIndex="1"
            aria-invalid="false"
            aria-controls="first-name"
            aria-label="What is your first name?"
            aria-activedescendant="first-name-item-0" />
          <label htmlFor="lastName">
            Last name
            <span className="font-italic">
              &nbsp;- Optional
            </span>
          </label>
          <input 
            name="lastName"
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last name (optional)"
            autoComplete="off"
            tabIndex="2"
            aria-invalid="false"
            aria-controls="last-name"
            aria-label="What is your last name?"
            aria-activedescendant="last-name-item-0" />
          <label htmlFor="email">
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
            tabIndex="3"
            autoCapitalize="none"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0" />
          <label htmlFor="message">
            Message
          </label>
          <textarea 
            name="message"
            type="text"
            id="message"
            rows="5"
            className="form-control"
            placeholder="Message"
            required={true}
            tabIndex="4"
            aria-invalid="false"
            aria-controls="message"
            aria-label="What is your message?"
            aria-activedescendant="message-item-0" 
            style={{
              paddingTop: '15px'
            }}/>
        </div>
        <input 
          type="submit" 
          value="Submit" 
          tabIndex="5" 
          className="btn btn-black btn-subscribe ml-auto"
          style={{
            marginTop: '24px'
          }}/>
      </form>
    );
  }
}

export default ContactForm;