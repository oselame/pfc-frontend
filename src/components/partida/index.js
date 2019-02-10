import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabela from './Tabela';
import Resultado from './Resultado';

const styles = theme => ({
  /*root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },*/
});

const Partida = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item sm >
          <Paper className={classes.paper}>
              <Resultado data="01/01/2019" placar="8 x 5"  />
          </Paper>
        </Grid>

        <Grid item sm >
          <Paper className={classes.paper}>
            <Tabela />
          </Paper>
        </Grid>
        <Grid item sm >
          <Paper className={classes.paper}>
          <Tabela />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Partida.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partida);