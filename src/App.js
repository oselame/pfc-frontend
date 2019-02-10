import React, { Component } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import './App.css';

import Splash from './components/splash';
import Principal from './components/principal';
import Header from './commons/header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#00b0ff',
    }
  },
});

class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000);   
  }


  render() {
    return (
      <MuiThemeProvider theme={theme}>
        { this.state.isLoading && <Splash /> }
        { !this.state.isLoading && 
          <div>
            <Header />
            <Principal /> 
          </div>
        }
      </MuiThemeProvider>
    );
  }
}

export default App;
