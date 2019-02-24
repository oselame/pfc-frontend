import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import renderHTML from 'react-render-html';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabela from './Tabela';
import Resultado from './Resultado';

import { Creators as PartidaActions } from '../../store/actions/partida';

import bolaCheia from '../../bola-murcha.png';
import bolaMurcha from '../../bola-murcha.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  bolarMurcha: {
    backgroundImage: `url(${bolaMurcha})`,
    
  }
});

class Partida extends Component {
  constructor(props) {
    super(props);

    this.props.getPartidaRequest();
  }

  render() {
    const { classes, partida } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} >
            <Paper className={classes.paper}>
                <Resultado data={ partida.dtPartida } placar={ partida.deResultado }  />
            </Paper>
          </Grid>
  
          <Grid item xs={6} >
            <Paper className={classes.paper}>
              <Tabela times={ partida.sociostimea } time="Time A"/>
            </Paper>
          </Grid>
          <Grid item xs={6} >
            <Paper className={classes.paper}>
              <Tabela times={ partida.sociostimeb }  time="Time B"/>
            </Paper>
          </Grid>

          <Grid item xs={6} >
            <Paper className={classes.paper}>
              { renderHTML(partida.deBolacheia) }
            </Paper>
          </Grid>

          <Grid item xs={6} >
            <Paper className={classes.paper}>              
              <div className={classes.bolarMurcha} >
                { renderHTML(partida.deBolamurcha) }
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Partida.propTypes = {
  partida: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  partida: state.partidaReducer.partida
});

const mapDispatchToProps = dispatch => bindActionCreators(PartidaActions, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Partida));