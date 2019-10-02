import React, { Component } from 'react';

class FooterColRight extends Component {
  state = {
    data: [
      {
        id: 1,
        url: '/roadmap',
        text: 'Roadmap',
        alt: 'Roadmap'
      },
      {
        id: 2,
        url: '/contact',
        text: 'Contact',
        alt: 'Contact'
      },
      {
        id: 3,
        url:
          'https://slack.universe.engineering',
        text: 'Slack',
        alt: 'Slack'
      }
    ]
  };

  render() {
    return this.state.data.map(item => (
      <li key={item.id} className="text-white-20 mb-2">
        <a href={item.url} alt={item.alt} className={this.props.className}>
          {item.text}
        </a>
      </li>
    ));
  }
}

export default FooterColRight;
