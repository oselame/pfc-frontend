import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Creators as RankingActions } from '../../store/actions/ranking';

import Ano from './Ano';

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

class Ranking extends Component {

  constructor(props) {
    super(props);

    this.props.getRankingAtualRequest();
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} >
            <Paper className={classes.paper}>
                <Ano />
            </Paper>
            <Paper className={classes.paper}>
                
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Paper>
                
            </Paper>
          </Grid>
        </Grid>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ranking: state.rankingReducer.ranking
});

const mapDispatchToProps = dispatch => bindActionCreators(RankingActions, dispatch);


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Ranking));