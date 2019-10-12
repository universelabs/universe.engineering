import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar 
          colorScheme="
            navbar-dark 
            bg-dark 
            bg-black" 
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
              mb-8 
              pb-8"
            style={{
              maxWidth: '800px'
            }}>
            <div />
            <h3 
              className="
                h1-editorial 
                mb-4b">
                  Contact
            </h3>
            <p className="mb-5">
              General inquiries, please fill out the form below.
            </p>
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
