import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { Section } from './styles';
import { ContainerRevealOptions } from '../utils/reveal';

export default function Home() {
  const revealContainer = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 200,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  }, []);

  return (
    <Section ref={revealContainer}>
      <H1>
        Hi, my name is
      </H1>
      <H2>
        Maria Hirai.
      </H2>
      <H3>
        I&apos;m a Software Engineer.
      </H3>
      <P>
        I&apos;m a Software Engineer focusing on building exceptional user experience.
      </P>
    </Section>
  );
}

const H1 = styled.h1`
  font-size: ${(props) => props.theme.sm};
  color: ${(props) => props.theme.main};
  margin: 0px 0px 30px 4px;
`;

const H2 = styled.h2`
  font-size: ${(props) => props.theme.xxl};
  font-weight: 900;
`;

const H3 = styled.h3`
  font-size: ${(props) => props.theme.xxl};
  color: ${(props) => props.theme.dark};
  font-weight: 900;
`;

const P = styled.p`
  font-size: ${(props) => props.theme.sm};
  color: ${(props) => props.theme.dark};
`;
