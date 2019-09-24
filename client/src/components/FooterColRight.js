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
          'https://join.slack.com/t/universelabs/shared_invite/enQtNjA2MjM1NjAyNzI0LTUyYWZjM2I5M2VhMTU3YTY3ZGI0YTAwNDQwN2I1Mzc4Yjk3YTg2Y2IxOGMyMDljOTdkM2Y4NTM3ZTAwYzc3NTg',
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
