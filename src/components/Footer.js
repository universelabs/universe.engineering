import React, { Component } from 'react';
import styled from 'styled-components';
import FooterSocial from '../components/FooterSocial';
import CopyrightUpdate from 'copyright-update';

const Div = styled.div`
  padding-bottom: 0;

  @media (min-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

class Footer extends Component {
  state = {
    socialItems: [
      {
        id: 1,
        href: 'https://github.com/universelabs/',
        alt: 'GitHub UniverseLabs (Universe Labs)',
        icon: 'github',
        text: 'GitHub'
      },
      {
        id: 2,
        href: 'https://twitter.com/UniverseLabs',
        alt: 'Twitter Universe Labs (@UniverseLabs)',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 3,
        href: 'https://medium.com/universelabs',
        alt: 'Universe Labs – Medium',
        icon: 'medium',
        text: 'Medium'
      },
      {
        id: 4,
        href: 'https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE',
        alt: 'Universe Labs – Slack',
        icon: 'slack',
        text: 'Slack'
      }
    ]
  }

  render() {
    return (
      <footer className="container-fluid mx-auto text-center">
        <Div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <FooterSocial 
              socialItems={this.state.socialItems}
              className="text-white"
              listAlign="list-inline-item"
            />
          </ul>
        </Div>
        <div className="text-footer text-white-50 font-weight-normal">
          <a 
            href="mailto:support@universe.engineering?subject=Mail from universe.engineering" 
            alt="Contact Universe Labs"
            className="text-white font-weight-bold">
            Contact
          </a>
          &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
          <CopyrightUpdate
            style={{
              display: 'inline-block',
            }}
          />
          &nbsp;Universe Labs Inc.
        </div>
      </footer>
    );
  }
}

export default Footer;
