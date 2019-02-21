import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import './App.css';

import store from './store';

import Splash from './components/splash';
import Header from './commons/header';
import Partida from './components/partida';
import Ranking from './components/ranking';
import Artilheiro from './components/artilheiro';
import Aniversariantes from './components/aniversariantes';
import Jantas from './components/jantas';
import Galerias from './components/galerias';
import Historia from './components/historia';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
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
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          { this.state.isLoading && <Splash /> }
          { !this.state.isLoading && 
            <Router>
              <div>
                <Header />
                <Switch>
                  <Route exact path='/'           component={ Partida } />
                  <Route path='/ultimapartida'    component={ Partida } />
                  <Route path='/ranking'          component={ Ranking } />
                  <Route path='/artilheiro'       component={ Artilheiro } />
                  <Route path='/aniversariantes'  component={ Aniversariantes } />
                  <Route path='/jantas'           component={ Jantas } />
                  <Route path='/galerias'         component={ Galerias } />
                  <Route path='/historia'         component={ Historia } />
                </Switch>
              </div>
            </Router>
          }
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
