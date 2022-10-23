import React from 'react';
import styled from 'styled-components';
import { Section } from './styles';

export default function About() {
  return (
    <Section>
      <H1>
        Hi, my name is
      </H1>
      <H2>
        Maria Hirai.
      </H2>
      <H3>
        I'm a Software Engineer.
      </H3>
      <P>
        I'm a Software Engineer focusing on building exceptional user experience.
      </P>
    </Section>
  );
}

const H1 = styled.h1`
  font-size: ${props => props.theme.sm};
  color: ${props => props.theme.main};
  margin: 0px 0px 30px 4px;
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.xxl};
  font-weight: 900;
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.xxl};
  color: ${props => props.theme.dark};
  font-weight: 900;
`;

const P = styled.p`
  font-size: ${props => props.theme.sm};
  color: ${props => props.theme.dark};
`;