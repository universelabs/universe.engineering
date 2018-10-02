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
          Universe is a blockchain agnostic dApp solutions community
        </div>
      </main>
    );
  }
}

export default Hero;
