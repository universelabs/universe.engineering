import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Div = styled.div`
  padding-bottom: 0;

  @media (min-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

const ListItem = styled.li`
  line-height: 25px;
`;

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid mx-auto text-center">
        <Div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <ListItem className="list-inline-item mx-2">
              <a href="https://github.com/universelabs/" 
                alt="GitHub UniverseLabs (Universe Labs)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'github']} /> GitHub
              </a>
            </ListItem>
            <ListItem className="list-inline-item mx-2">
              <a href="https://twitter.com/UniverseLabs" 
                alt="Twitter Universe Labs (@UniverseLabs)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'twitter']} /> Twitter
              </a>
            </ListItem>
            <ListItem className="list-inline-item mx-2">
              <a href="https://medium.com/@universelabs" 
                alt="Universe Labs – Medium"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'medium']} /> Medium
              </a>
            </ListItem>
            <ListItem className="list-inline-item mx-2">
              <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE" 
                alt="Universe Labs – Slack"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'slack']} /> Slack
              </a>
            </ListItem>
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
