import React, { Component } from 'react';

class FooterColLeft extends Component {
  state = {
    data : [
      {
        id: 1,
        url: "/",
        text: "Coming soon...",
        alt: "Coming soon..."
      }
    ]
  }
  
  render() {
    return this.state.data.map((item) => (
      <li key={item.id} className="text-white-50">
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

export default FooterColLeft;
