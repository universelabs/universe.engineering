import React, { Component } from 'react';
import NavbarLight from '../components/NavbarLight';
import ContactForm from '../components/ContactForm';


class Help extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column"
        style={{
          backgroundColor: '#FAFAFA'
        }}>
        <NavbarLight colorScheme="navbar-light bg-light bg-white"/>
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8">
            <div></div>
            <h3 className="h1-editorial mb-4b">
              Help
            </h3>
            <p className="mb-5">
              Need assistance? Have some feedback? <br />
              Please fill out the form below and someone will contact you shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
