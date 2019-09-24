import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmark from './../img/universe-wordmark.svg';

class MailerSuccess extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          "
        >
          <div className="card col-md-8 mt-4c mt-md-6">
            <div className="card-body">
              <div className="text-center mb-4">
                <a href="/" className="d-block mb-4 mb-md-4b">
                  <img
                    className="brand-img"
                    src={logoWordmark}
                    alt="Universe Labs Logo"
                  />
                </a>
                <p className="lead-md font-weight-bold">Message Sent...</p>
                <p>Thank you for getting in touch!</p>
                <p className="mb-5">
                  Someone will respond within 24hrs. Have a great day!
                </p>
                <p className="font-weight-bold">What's next?</p>
                <p className="mb-6">
                  <a
                    href="https://github.com/universelabs/"
                    alt="GitHub UniverseLabs (Universe Labs)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-light mx-1"
                  >
                    &nbsp;Star&nbsp;
                  </a>{' '}
                  the open source project.{' '}
                  <a
                    href="https://twitter.com/UniverseLabs"
                    alt="Twitter Universe Labs (@UniverseLabs)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-light mx-1"
                  >
                    &nbsp;Follow&nbsp;
                  </a>{' '}
                  Universe on Twitter.{' '}
                  <a
                    href="https://join.slack.com/t/universelabs/shared_invite/enQtNjA2MjM1NjAyNzI0LTUyYWZjM2I5M2VhMTU3YTY3ZGI0YTAwNDQwN2I1Mzc4Yjk3YTg2Y2IxOGMyMDljOTdkM2Y4NTM3ZTAwYzc3NTg"
                    alt="Universe Labs – Slack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-light mx-1"
                  >
                    &nbsp;Join&nbsp;
                  </a>{' '}
                  the community.{' '}
                  <a
                    href="/subscribe"
                    alt="Subscribe to newsletter"
                    className="bg-black text-light mx-1"
                  >
                    &nbsp;Subscribe&nbsp;
                  </a>{' '}
                  to the newsletter.
                </p>
              </div>
              <div className="text-center mb-4">
                <a
                  className="btn btn-secondary btn-subscribe mx-auto"
                  style={{
                    textDecoration: 'none'
                  }}
                  href="/"
                  role="button"
                  tabIndex="1"
                >
                  Back to home
                </a>
              </div>
              <div className="text-center small letter-space mt-9 mb-4">
                <CopyrightUpdate
                  style={{
                    display: 'inline-block'
                  }}
                />
                &nbsp;Universe Labs Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailerSuccess;
