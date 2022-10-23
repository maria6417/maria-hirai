import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import About from './About';
import { theme } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
    </ThemeProvider>
  )
}