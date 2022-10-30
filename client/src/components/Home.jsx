import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { Section, Button } from './styles';
import { containerRevealOptions } from '../utils/reveal';
import maria from '../assets/mariah.jpg';

export default function Home() {
  const revealContainer = useRef(null);
  useEffect(() => {
    if (revealContainer.current) {
      ScrollReveal().reveal(revealContainer.current, containerRevealOptions);
    }
  }, []);

  return (
    <Container>
      <FlexSection ref={revealContainer}>
        <ProfilePic src={maria} alt="maria hirai" />
        <div>
          <H1>
            Hello!
          </H1>
          <H2>
            I am Maria Hirai.
            <br />
            A Full Stack Engineer
            <br />
            based in Los Angeles.
          </H2>
          <Button type="button" style={{ width: '100px' }}>Say Hi!</Button>
        </div>
      </FlexSection>
    </Container>
  );
}

const ProfilePic = styled.img`
  margin-top: 20px;
  width: 480px;
  height: 500px;
  object-fit: cover;
`;

const H1 = styled.h1`
  font-size: ${(props) => props.theme.xxl};
  font-weight: 800;
  color: ${(props) => props.theme.main};
  margin: 0px 0px 30px 0px;
`;

const H2 = styled.h2`
  font-size: ${(props) => props.theme.xxxl};
  color: ${(props) => props.theme.dark};
  font-weight: 900;
  margin: 0px 0px 30px 0px;
`;

const P = styled.p`
  font-size: ${(props) => props.theme.md};
  color: ${(props) => props.theme.dark};
`;

const FlexSection = styled(Section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 100px);
  @media (max-width: 768px) {
    min-height: cal(100vh - 90px);
  }
`;

const Container = styled.div`
  background-color: #fffbf9;
  /* &:after {
    content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  } */
`;