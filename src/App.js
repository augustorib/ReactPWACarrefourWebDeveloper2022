import React from "react";
import {StylesProvider} from '@material-ui/styles';
import {CssBaseline} from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline/>
        <GlobalStyle/>
        <Main/>
          <div>
            <h1>Hello World!</h1>
            <p>Olá mundo!</p>
          </div>
    </StylesProvider>
  );
}

export default App;
