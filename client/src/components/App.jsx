import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Home from './Home';
import About from './About';
import { theme } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <About />
    </ThemeProvider>
  );
}
