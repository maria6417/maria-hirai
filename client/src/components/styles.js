import styled from 'styled-components';

export const theme = {
  // main: '#B5838D',
  slate: '#ccd6f6',
  lightest: '#ffcdb2',
  light: '#ffb4a2',
  middle: '#e5989b',
  middark: '#b5838d',
  dark: '#6D6875',
  darker: '#47444d',
  xxxl: '40px',
  xxl: '30px',
  xl: '20px',
  lg: '18px',
  md: '16px',
  sm: '14px',
  xs: '13px',
  xxs: '12px',
  minHeightDesktop: 'calc(100vh - 115px)',
  minHeightMobile: 'calc(100vh - 98px',
};

export const Section = styled.section`
  width: 70%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: white;
  color: ${(props) => props.theme.middark};
  border: ${(props) => `1px solid ${props.theme.middark}`};
  border-radius: 5px;
  padding: 10px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  margin: 10px 0px 40px;
  font-size: ${(props) => props.theme.xl};
`;

export const ColoredSpan = styled.span`
  color: ${(props) => props.theme.main};
  font-size: ${(props) => (props.size ? props.size : 'inherit')};
`;

export const BulletPoint = styled.img`
  width: ${(props) => (props.size ? props.size : '30px')};
  height: ${(props) => (props.size ? props.size : '30px')};
  margin-right: 10px;
`;
