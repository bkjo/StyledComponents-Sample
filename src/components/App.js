import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Nav from './nav';
import Body from './body';


const GlobalStyle = createGlobalStyle`
  body, html, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle/>
        <Nav />
        <Body />
      </AppWrapper>
      
    );
  }
}

export default App;
