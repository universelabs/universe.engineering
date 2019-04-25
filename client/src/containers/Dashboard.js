import React, { Component } from 'react';
import NavbarLight from '../components/NavbarLight';
import KeyList from '../components/KeyList';

class Dashboard extends Component {
  componentDidMount(){
    document.title = "Dashboard"
  }

  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column"
        style={{
          backgroundColor: '#FAFAFA'
        }}>
        <NavbarLight colorScheme="navbar-light bg-light bg-white"/>
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8">
            <div></div>
            <h3 className="h1-editorial mb-4b">
              Your Keys
            </h3>
            <p className="mb-5">
              Your keys for your various platforms are below.
            </p>
            <KeyList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
