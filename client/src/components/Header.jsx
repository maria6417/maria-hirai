import React from 'react';
import styled from 'styled-components';
import logo from '../assets/m.png';

export default function Header() {
  return (
    <FlexHeader justifyContent="space-between" alignItems="center" width="90%" margin="auto" style={{ padding: '20px' }}>
      <Logo src={logo} />
      <Nav justifyContent="space-between" alignItems="center" style={{ 'max-width': '40%' }}>
        <LinkItem href=""><Span>01. </Span>About</LinkItem>
        <LinkItem href=""><Span>02. </Span>Experience</LinkItem>
        <LinkItem href=""><Span>03. </Span>Works</LinkItem>
        <Button type="button">Resume</Button>
      </Nav>
    </FlexHeader>
  )
}

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Span = styled.span`
  color: ${props => props.theme.main}
`;

const LinkItem = styled.a`
  color: black;
  &:hover {
    color: ${props => props.theme.main};
  }
`;

const FlexHeader = styled.header`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'initial'};
  align-items: ${props => props.alignItems ? props.alignItems : 'initial'};
  flex-direction: ${props => props.dir ? props.dir : 'row'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : 0};
  position: fixed;
  top: 0px;
  z-index: 11;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'initial'};
  align-items: ${props => props.alignItems ? props.alignItems : 'initial'};
  flex-direction: ${props => props.dir ? props.dir : 'row'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : 0};
`;

const Button = styled.button`
  background-color: white;
  color: ${props => props.theme.main};
  border: ${props => `1px solid ${props.theme.main}`};
  border-radius: 5px;
  padding: 8px;
`;