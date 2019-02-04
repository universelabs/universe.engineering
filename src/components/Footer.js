import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid mx-auto text-center pb-4">
        <div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <li className="list-inline-item mx-2">
              <a href="https://github.com/universelabs/" 
                alt="GitHub UniverseLabs (Universe Labs)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'github']} /> GitHub
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://twitter.com/UniverseLabs" 
                alt="Twitter Universe Labs (@UniverseLabs)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'twitter']} /> Twitter
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://medium.com/@universelabs" 
                alt="Universe Labs – Medium"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'medium']} /> Medium
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE" 
                alt="Universe Labs – Slack"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'slack']} /> Slack
              </a>
            </li>
          </ul>
        </div>
        <div className="text-footer text-white-50 font-weight-normal my-1">
          <a 
            href="mailto:support@universe.engineering?subject=Mail from universe.engineering" 
            alt="Contact Universe Labs"
            className="text-white font-weight-bold">
            Contact
          </a>
        </div>
        <div className="text-footer text-white-50 font-weight-normal">
          Universe Labs Inc. 
            <CopyrightUpdate 
              style={{
                display: 'inline-block',
                marginLeft: '6px'
              }}
            />
        </div>
      </footer>
    );
  }
}

export default Footer;
