import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';

// Value equal to `.collapsing` class is set to none.

$(document).ready(function() {
  $('button').click(function() {
    $('#navbarBasicLight').animate(
      {
        opacity: 'toggle',
        backgroundColor: '#fff'
      },
      300
    );
  });
});

class NavbarTogglerLight extends Component {
  render() {
    return (
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarBasicLight"
        aria-controls="navbarBasicLight"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={this.props.style}
        >
        <span className={`icon-bar top-bar ${this.props.className}`} />
        <span className={`icon-bar bottom-bar ${this.props.className}`} />
      </button>
    );
  }
}

export default NavbarTogglerLight;
