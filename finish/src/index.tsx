import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import App from 'components/App';
import { customTheme } from './theme'

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <CSSReset />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
