import styled from 'styled-components';

export const theme = {
  main: '#B5838D',
  dark: '#6D6875',
  xxl: '40px',
  xl: '20px',
  lg: '18px',
  md: '16px',
  sm: '14px',
  xs: '13px',
  xxs: '12px',
};

export const Section = styled.section`
  width: 60%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const Button = styled.button`
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

export const Title = styled.h2`
  margin: 10px 0px 40px;
  font-size: ${(props) => props.theme.xl};
`;

export const ColoredSpan = styled.span`
  color: ${(props) => props.theme.main};
  font-size: ${(props) => (props.size ? props.size : 'inherit')};
`;
