import React, { Component } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Creators as AniversarianteActions } from '../../store/actions/aniversariante';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

class Aniversariantes extends Component {

  constructor(props) {
    super(props);

    this.props.getAniversarianteRequest();
  }

  render() {
    const { classes, aniversariantes } = this.props;
    console.log(aniversariantes)

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} >
            <Paper className={classes.paper}>
              <List dense={false}>
                {
                  aniversariantes.map(ani => (
                    <ListItem key={ani.cdSocio}>
                      <ListItemAvatar>
                        <Avatar src={{ uri: `data:image/png;base64, ${ani.foto}` }} />                        
                      </ListItemAvatar>
                      <ListItemText primary={ani.nmApelido}
                        secondary={ani.data}/>
                    </ListItem>
                  ))
                }
              </List>
            </Paper>
          </Grid>
  

        </Grid>
      </div>
    )
  }
}

Aniversariantes.propTypes = {
};


const mapStateToProps = state => ({
  aniversariantes: state.aniversarianteReducer.aniversariantes
});

const mapDispatchToProps = dispatch => bindActionCreators(AniversarianteActions, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Aniversariantes));