import React from 'react';
import styled from 'styled-components';
import logo from '../assets/m.png';

export default function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" width="90%" margin="auto" style={{ padding: '20px' }}>
      <Logo src={logo} />
      <Flex justifyContent="space-between" alignItems="center" style={{ 'max-width': '40%' }}>
        <a href=""><span>01. </span>About</a>
        <a href=""><span>02. </span>Experience</a>
        <a href=""><span>03. </span>Works</a>
        <button type="button">Resume</button>
      </Flex>
    </Flex>
  )
}

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'initial'};
  align-items: ${props => props.alignItems ? props.alignItems : 'initial'};
  flex-direction: ${props => props.dir ? props.dir : 'row'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : 0};
`;