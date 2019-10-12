import React, { Component } from 'react';

class KeyList extends Component {
  state = {
    data: [
      {
        id: 1,
        href: '#',
        text: 'Blockstack Keys'
      },
      {
        id: 2,
        href: '#',
        text: 'Solid Keys'
      },
      {
        id: 3,
        href: '#',
        text: 'MetaMask (Ethereum) Keys'
      }
    ]
  };

  render() {
    return this.state.data.map(item => (
      <li
        className="list-group-item list-group-item-action"
        key={item.id}
        style={{
          cursor: 'pointer'
        }}>
        <a href={item.url} alt="Key, passphrase or seed">
          {item.text}
        </a>
      </li>
    ));
  }
}

export default KeyList;
