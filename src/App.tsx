import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { Page } from './components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Berkshire+Swash|Kodchasan:400,600,700&display=swap');
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Kodchasan';
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
