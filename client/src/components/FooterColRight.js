import React, { Component } from 'react';

class FooterColRight extends Component {
  state = {
    data : [
      {
        "id": 1,
        "url": "/roadmap",
        "text": "Roadmap",
        "alt": "Roadmap"
      },
      {
        "id": 2,
        "url": "mailto:support@universe.engineering?subject=Mail from Universe.engineering",
        "text": "Contact",
        "alt": "Contact"
      },
      {
        "id": 3,
        "url": "https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE",
        "text": "Slack",
        "alt": "Slack"
      }
    ]
  }
  
  render() {
    return this.state.data.map((item) => (
      <li key={item.id} className="text-white-50 mb-2">
        <a 
          href={item.url} 
          alt={item.alt}
          className={this.props.className}>
          {item.text}
        </a>
      </li>
    ));
  }
}

export default FooterColRight;
