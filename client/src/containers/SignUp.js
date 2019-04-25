import React, { Component } from 'react';
import Modal from '../components/Modal';

// Using a ES6 class component as it contains state.
class SignUp extends Component {
  componentDidMount(){
    document.title = "Sign up"
  }

  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column"
        style={{
          backgroundColor: '#FAFAFA'
        }}>
        <Modal />
      </div>
    );
  }
}

export default SignUp;
