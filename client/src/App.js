// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};


export default App;
