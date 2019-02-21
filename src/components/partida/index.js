import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabela from './Tabela';
import Resultado from './Resultado';

import { Creators as PartidaActions } from '../../store/actions/partida';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Partida = (props) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} >
          <Paper className={styles.paper}>
              <Resultado data="01/01/2019" placar="8 x 5"  />
          </Paper>
        </Grid>

        <Grid item xs={6} >
          <Paper className={styles.paper}>
            <Tabela />
          </Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={styles.paper}>
          <Tabela />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Partida.propTypes = {
};


const mapStateToProps = state => ({
  partida: state.partida
});

const mapDispatchToProps = dispatch => bindActionCreators(PartidaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Partida);