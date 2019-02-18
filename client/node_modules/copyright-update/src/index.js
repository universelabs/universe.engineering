import React, { Component } from 'react';

class CopyrightUpdate extends Component {
  render() {
    return (
      <div 
        className={`copyright-update ${this.props.className}`}
        style={this.props.style}
        >
        &copy; {new Date().getFullYear()}
      </div>
    );
  }
}
export default CopyrightUpdate;
