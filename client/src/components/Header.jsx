import React from 'react';
import styled from 'styled-components';
import logo from '../assets/m.png';
import { Button } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
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
        </Flex>
        <Logo src={logo} />
        <Button type="button">Resume</Button>
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
  color: ${(props) => props.theme.dark};
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;
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
