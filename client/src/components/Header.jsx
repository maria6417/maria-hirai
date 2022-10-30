import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import logo from '../assets/m.png';
import { Button } from './styles';
import { containerRevealOptions } from '../utils/reveal';

export default function Header() {
  const revealContainer = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, containerRevealOptions);
  }, []);

  const revealOptions = {
    delay: 250,
    duration: 500,
    scale: 0.85,
    reset: true,
  };

  return (
    <HeaderContainer ref={revealContainer}>
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
        {/* <Logo>M.H</Logo> */}
        <GridButton type="button">Resume</GridButton>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  /* position: fixed; */
  top: 0px;
  z-index: 11;
  height: 100px;
  width: 100%;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  /* color: ${(props) => props.theme.darker}; */
  background-color: white;

  @media (max-width: 1080px) {
    padding: 0 40px;
    height: 100px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
    height: 90px;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  width: 100%;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  justify-self: center;
  align-self: center;
`;

// const Logo = styled.div`
//   font-size: ${(props) => (props.theme.xxl)};
//   color: ${(props) => (props.theme.lightest)};
// `;

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
  align-self: center;
  justify-self: start;
`;

const Span = styled.span`
  color: ${(props) => props.theme.middark};
`;

const GridButton = styled(Button)`
  align-self: center;
  justify-self: end;
`;
