import React, { Component } from 'react';
import NavbarLight from '../components/NavbarLight';
import ContactForm from '../components/ContactForm';
import Alert from '../components/Alert';

class Help extends Component {
  componentDidMount() {
    document.title = 'Help';
  }

  render() {
    return (
      <div
        className="
          d-flex 
          w-100 
          h-100 
          mx-auto 
          flex-column"
        style={{
          backgroundColor: '#FAFAFA'
        }}>
        <Alert
          size=""
          color="alert-danger"
          className="text-center"
          style={{
            marginBottom: 0
          }}>
          <strong>WARNING:</strong> Product in Alpha - <strong>DO NOT</strong>{' '}
          store more than <strong>$10</strong> on your keys.
        </Alert>
        <NavbarLight
          colorScheme="
            navbar-light 
            bg-light 
            bg-white"
          />
        <div
          style={{
            marginLeft: '6px',
            marginRight: '6px'
          }}>
          <div
            className="
              container 
              text-left 
              mb-8 pb-8"
            >
            <h3 className="mt-5 mt-md-7 mb-3 mb-md-4">Help</h3>
            <p className="mb-4b">
              Need assistance? Have some feedback? <br />
              Please fill out the form below and someone will contact you
              shortly.
            </p>
            <div className="list-group">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
