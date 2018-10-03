import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main role="main" className="mx-auto text-center content-hero mt-auto mb-auto"
        style={{
          maxWidth: '685px'
        }}>
        <h1 className="display-3 text-white font-weight-bold">
          Universe
        </h1>
        <div className="lead text-white-50">
          Universe is a dApp solutions community removing blockers that impede growth and adoption.
        </div>
        <a href="https://goo.gl/forms/Uafi9m8afCbJrubB3" 
          className="btn btn-lg btn-light btn-block mb-4 mx-auto btn-hero"
          role="button">
          Questionnaire
        </a>
        <div className="mb-44 text-white-50"
          style={{
            fontSize: '90%'
          }}>
            dApp Developer Questionnaire.
        </div>
      </main>
    );
  }
}

export default Hero;
