import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';

import Character from './components/Character'

import './App.css';
import theme from "./Theme";

const StlyedApp = styled.div`
  text-align: center;
  h1 {
    color: white;
  }
`;




const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <StlyedApp>
        <div className="App">
          <h1>Characters</h1>
          <Character />
        </div>
      </StlyedApp>
    </ThemeProvider>
  );
}

export default App;
