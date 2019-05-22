import React, { Component } from 'react';

class FooterColCenter extends Component {
  state = {
    data: [
      {
        id: 1,
        url: '/',
        text: 'Ethereum',
        alt: 'Ethereum'
      },
      {
        id: 2,
        url: '/',
        text: 'Blockstack',
        alt: 'Blockstack'
      },
      {
        id: 3,
        url: '/',
        text: 'Bitcoin',
        alt: 'Bitcoin'
      },
      {
        id: 4,
        url: '/',
        text: 'Lightning',
        alt: 'Lightning'
      }
    ]
  };

  render() {
    return this.state.data.map(item => (
      <li key={item.id} className="text-white-20 mb-2">
        {/* <a 
          href={item.url} 
          alt={item.alt}
          className={this.props.className}>
        */}
        {item.text}
        {/*</a>*/}
      </li>
    ));
  }
}

export default FooterColCenter;
