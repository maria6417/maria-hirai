/* eslint-disable max-len */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import maria from '../assets/maria.png';
import arrow from '../assets/arrow.png';
import { Section, Title, ColoredSpan, BulletPoint } from './styles';

export default function About() {
  const revealContainer = useRef(null);
  const techStack = ['Javascript', 'ReactJS', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'AWS'];

  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current);
  }, []);

  return (
    <Section ref={revealContainer}>
      <Title>
        <ColoredSpan>01. </ColoredSpan>
        About Me
      </Title>
      <FlexRow>
        <ProfilePic src={maria} alt="maria hirai" />
        <Desc>
          <p>
            Hi there!👋 My name is Maria Hirai and I am a passionate software engineer that loves creating modern UI applications and exceptional user experience. I have previously worked at Oracle as a technical consultant, dealing with various cloud infrastructures and systems of clients all over Japan. I enjoyed learning so many new technology throughout my years there, and has reinforced my passion in technology, specifically in coding.
          </p>
          <br />
          <p>
            I recently graduated from Hack Reactor, a 1000+ hour bootcamp that is highly intensive and requires efficient and quick learning. One of the projects I&apos;ve worked on is creating a full stack application that helps dog owners find like-minded dogs. I truly enjoy the process of building web applications and exceptional user experience, numerous problem solving, and debugging!
          </p>
          <br />
          <div>
            Some of the technologies that I use day-to-day are:
            <Grid>
              {techStack.map((stack) => (
                <li style={{ display: 'flex', padding: '5px 0' }}>
                  <BulletPoint size="20px" src={arrow} alt="arrow" />
                  {`  ${stack}`}
                </li>
              ))}
            </Grid>
          </div>
        </Desc>
      </FlexRow>
    </Section>
  );
}

const ProfilePic = styled.img`
  width: 300px;
  height: 300px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Desc = styled.div`
  padding-left: 80px;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
`;
