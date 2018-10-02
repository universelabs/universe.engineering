import React, { Component } from 'react';
import logoCluster from './../img/universe-bug-cluster-white.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="mx-auto text-center mb-2">
        <div className="container-fluid mx-auto mb-4">
          <img src={logoCluster}
            alt="Universe logo cluster"
            width="60"
            style={{
              opacity: '0.25'
            }}
          />
        </div>
        <div className="mb-2 text-white-50 text-footer font-weight-bold">
          <a href="https://github.com/universelabs/" className="text-white">
            GitHub
          </a>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="https://twitter.com/UniverseLabs" className="text-white">
            Twitter
          </a>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE" className="text-white">
            Slack
          </a>
        </div>
        <div className="text-white-50 font-weight-normal">
          Universe Labs Inc. &copy; 2018.
        </div>
      </footer>
    );
  }
}

export default Footer;
