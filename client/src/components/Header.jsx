import React from 'react';
import styled from 'styled-components';
import logo from '../assets/m.png';

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo src={logo} />
        <Flex>
          <Links>
            <LinkItem href="">
              <Span>01. </Span>
              About
            </LinkItem>
            <LinkItem href="">
              <Span>02. </Span>
              Experience
            </LinkItem>
            <LinkItem href="">
              <Span>03. </Span>
              Works
            </LinkItem>
          </Links>
          <Button type="button">Resume</Button>
        </Flex>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0px;
  z-index: 11;
  height: 100px;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.xs};
`;

const LinkItem = styled.li`
  color: black;
  padding: 10px;
  margin: 0 5px;
  &:hover {
    color: ${(props) => props.theme.main};
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Links = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 40%; */
`;

const Span = styled.span`
  color: ${(props) => props.theme.main};
`;

const Button = styled.button`
  background-color: white;
  color: ${(props) => props.theme.main};
  border: ${(props) => `1px solid ${props.theme.main}`};
  border-radius: 5px;
  padding: 10px;
  margin: 0 5px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
