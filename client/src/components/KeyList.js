import React, { Component } from 'react';

class KeyList extends Component {
  render() {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          Blockstack Keys
        </a>
        <a href="#" className="list-group-item list-group-item-action">Solid Keys</a>
        <a href="#" className="list-group-item list-group-item-action">MetaMaks Keys</a>
      </div>
    );
  }
}

export default KeyList;