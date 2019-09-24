import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import FooterColLeft from './FooterColLeft';
import FooterColCenter from './FooterColCenter';
import FooterColRight from './FooterColRight';
import Social from './Social';
import logoWordmark from './../img/universe-wordmark-white.svg';
import '../css/Footer.css';

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
        href: 'https://www.npmjs.com/package/@universelabs/meta',
        alt: 'npm @universelabs (Universe Labs)',
        icon: 'npm',
        text: 'npm'
      },
      {
        id: 3,
        href: 'https://twitter.com/UniverseLabs',
        alt: 'Twitter Universe Labs (@UniverseLabs)',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 4,
        href: 'https://medium.com/universelabs',
        alt: 'Universe Labs – Medium',
        icon: 'medium',
        text: 'Medium'
      },
      {
        id: 5,
        href:
          'https://join.slack.com/t/universelabs/shared_invite/enQtNjA2MjM1NjAyNzI0LTUyYWZjM2I5M2VhMTU3YTY3ZGI0YTAwNDQwN2I1Mzc4Yjk3YTg2Y2IxOGMyMDljOTdkM2Y4NTM3ZTAwYzc3NTg',
        alt: 'Universe Labs – Slack',
        icon: 'slack',
        text: 'Slack'
      }
    ]
  };

  render() {
    return (
      <footer
        className={`container-fluid ${this.props.className}`}
        style={{ backgroundColor: '#000' }}
      >
        <div className="container pt-6 pb-6">
          <div className="mb-4b">
            <a href="/">
              <img
                src={logoWordmark}
                className="navbar-brand-img"
                alt="Universe Logo"
                style={{
                  marginLeft: '-3px'
                }}
              />
            </a>
          </div>
          <div className="text-white">
            <div className="row">
              <div className="col-sm-6 col-md-3 mb-4 ml-auto">
                <ul className="list-unstyled my-2">
                  <li className="d-block mb-3">Products</li>
                  <FooterColLeft className="text-white" />
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                <ul className="list-unstyled my-2">
                  <li className="d-block mb-3">Platforms</li>
                  <FooterColCenter className="text-white" />
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                <ul className="list-unstyled my-2">
                  <li className="d-block mb-3">Community</li>
                  <FooterColRight className="text-white" />
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white-50 mb-4">
            <div className="row d-flex align-items-end">
              <ul
                className="inline-list"
                style={{
                  paddingRight: '2px',
                  paddingLeft: '8px'
                }}
              >
                <Social
                  socialItems={this.state.socialItems}
                  listAlign="list-inline-item"
                  className="text-white"
                />
              </ul>
              <div className="subscribe ml-auto pl-3 pr-3">
                <p className="text-white small-font-size-90 mt-4">
                  Subscribe to our mailing list.
                </p>
                <a
                  className="btn btn-sm btn-outline-white btn-block mx-auto mb-4"
                  href="/subscribe"
                  role="button"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="container line w-100 bg-white mb-4c" />
          <div className="small text-white-50 letter-space mb-2">
            <CopyrightUpdate
              style={{
                display: 'inline-block'
              }}
            />
            &nbsp;Universe Labs Inc.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
