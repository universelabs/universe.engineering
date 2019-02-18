import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = styled.li`
  line-height: 25px;
`;

class FooterSocial extends Component {
  render() {
    return this.props.socialItems.map((item) => (
      <ListItem key={item.id} className={`${this.props.listAlign} mx-2`}>
        <a 
          href={item.href} 
          alt={item.alt}
          className={`${this.props.className}`}>
          <FontAwesomeIcon 
            className="mr-1" 
            icon={[`fab`, `${item.icon}`]}
            />
        </a>
      </ListItem>
    ));
  }
}

export default FooterSocial;
