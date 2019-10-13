import React, { Component } from 'react';
import styled from 'styled-components';
import Background from './../img/universe-rhombi.svg';

const Overlay = styled.div`
  height: 635px;

  @media (min-width: 768px) {
    background: url(${Background});
    background-size: 675px;
    background-position-x: 680%;
    background-position-y: 57%;
    background-repeat: no-repeat;
    width: 100%;
    height: 725px;
  }
  @media (min-width: 775px) {
    background-position-x: 620%;
  }
  @media (min-width: 786px) {
    background-position-x: 570%;
  }
  @media (min-width: 800px) {
    background-position-x: 520%;
  }
  @media (min-width: 815px) {
    background-position-x: 494%;
  }
  @media (min-width: 825px) {
    background-position-x: 455%;
  }
  @media (min-width: 838px) {
    background-position-x: 405%;
  }
  @media (min-width: 850px) {
    background-position-x: 371%;
  }
  @media (min-width: 875px) {
    background-position-x: 330%;
  }
  @media (min-width: 900px) {
    background-position-x: 300%;
  }
  @media (min-width: 925px) {
    background-position-x: 278%;
  }
  @media (min-width: 950px) {
    background-position-x: 249%;
  }
  @media (min-width: 975px) {
    background-position-x: 230%;
  }
  @media (min-width: 992px) {
    background-size: 700px;
    background-position-x: 245%;
  }
  @media (min-width: 1000px) {
    background-position-x: 250%;
  }
  @media (min-width: 1025px) {
    background-position-x: 231%;
  }
  @media (min-width: 1050px) {
    background-position-x: 220%;
  }
  @media (min-width: 1075px) {
    background-position-x: 211%;
  }
  @media (min-width: 1100px) {
    background-position-x: 200%;
  }
  @media (min-width: 1125px) {
    background-position-x: 190%;
  }
  @media (min-width: 1150px) {
    background-position-x: 183%;
  }
  @media (min-width: 1175px) {
    background-position-x: 175%;
  }
  @media (min-width: 1200px) {
    background-size: 735px;
    background-position-x: 161%;
  }
  @media (min-width: 1225px) {
    background-position-x: 154%;
  }
  @media (min-width: 1250px) {
    background-position-x: 150%;
  }
  @media (min-width: 1275px) {
    background-position-x: 145%;
  }
  @media (min-width: 1300px) {
    background-position-x: 139%;
  }
  @media (min-width: 1350px) {
    background-position-x: 133%;
  }
  @media (min-width: 1400px) {
    background-position-x: 129%;
  }
  @media (min-width: 1450px) {
    background-position-x: 127%;
  }
  @media (min-width: 1500px) {
    background-position-x: 123%;
  }
  @media (min-width: 1600px) {
    background-position-x: 117%;
  }
  @media (min-width: 1700px) {
    background-position-x: 111%;
  }
  @media (min-width: 1800px) {
    background-position-x: 105%;
  }
  @media (min-width: 1900px) {
    background-position-x: 100%;
  }
`;

const Heading = styled.h1`
  margin-top: 72px;
  margin-bottom: 18px;

  @media (max-width: 575.98px) {
    font-size: 9.5vw;
  }

  @media (min-width: 576px) {
    font-size: 2.75rem;
  }

  @media (min-width: 768px) {
    font-size: 3.375rem;
  }
`;

const Lead = styled.p`
  font-size: 1.1rem;
  max-width: 550px;
  margin-bottom: 24px;

  @media (min-width: 576px) {
    font-size: 1.25rem;
    margin-bottom: 32px;
  }
`;

const Button = styled.a`
  margin-bottom: 32px;

  @media (min-width: 576px) {
    margin-bottom: 32px;
  }
`;

class Hero extends Component {
  render() {
    return (
      <div
        className="container-fluid pl-0 pr-0 hero"
        style={{
          marginTop: '-80px'
        }}>
        <div className="row no-gutters">
          <Overlay
            className="
              container-fluid 
              d-flex 
              align-items-center"
            >
            <div className="container my-auto anima-fadein">
              <div
                style={{
                  maxWidth: '650px'
                }}>
                <Heading>
                  Go ahead. Lose
                  your Private Keys.
                </Heading>
                <Lead className="lead font-weight-heavy"
                  style={{
                    letterSpacing: '-0.015em'
                  }}>
                  We use a simple version of Shamir's Secret Sharing for private key recovery so you no longer have to worry about losing what you own.
                </Lead>
                <div className="">
                  <Button
                    className="
                      btn 
                      btn-black 
                      btn-block 
                      fadein
                      anima-fadein-delay-800"
                    style={{
                      maxWidth: '255px'
                    }}
                    href="/subscribe"
                    role="button"
                    tabIndex="1"
                    >
                    Subscribe
                  </Button>
                  <p
                    className="mb-2"
                    >
                    <span
                      className="small-font-size-80"
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#000',
                        color: '#fff',
                        paddingRight: '.6em',
                        paddingLeft: '.6em',
                        borderRadius: '10rem'
                      }}>
                        &nbsp;v1.0.0-alpha&nbsp;
                    </span>
                      &nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;
                    <a 
                      style={{
                        position: 'relative',
                        top: '2px'
                      }}
                      href="https://github.com/universelabs/universe" 
                      alt="GitHub UniverseLabs (Universe Labs)"
                      >
                        Open Source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Overlay>
        </div>
      </div>
    );
  }
}

export default Hero;
