import React, { Component } from 'react';
import Page404 from './Page404';

class NoMatch extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column">
        <div 
          style={{
            paddingTop: '65px'
          }}>
        </div>
        <Page404 />
      </div>
    );
  }
}

export default NoMatch;
