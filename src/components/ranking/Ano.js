import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

import { Creators as QuadrimestreActions } from '../../store/actions/quadrimestre';
import Items from './Items';

const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    // minWidth: 700,
  },
});


class Ano extends Component {

  state = {
    nuAno: 0
  }

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.getYearListRequest();  
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getItemsList = (years) => {
    console.log("xxxxx", !!years && years.length > 0);
    if (!!years && years.length > 0) {
      years.map(year => (
          <MenuItem key={year.nuAno} value={year.nuAno}>{year.nuAno}</MenuItem>
      ))
    }
  }

  render() {
    const { classes, years } = this.props;
    console.log("render.years", years);

    return (
        <div className={classes.root}>
          <InputLabel htmlFor="ano">Ano</InputLabel>
          <Select 
            value={this.state.nuAno}
            onChange={this.handleChange}
            name="nuAno">
              {
                !!years && years.length > 0 &&
                  years.map(year => (
                      <MenuItem key={year.nuAno} value={year.nuAno}>{year.nuAno}</MenuItem>
                  ))
              }
            }
          </Select>
        </div>
    )
  }
}

Ano.propTypes = {
  
}

const mapStateToProps = state => ({
  years: state.quadrimestreReducer.years
});

const mapDispatchToProps = dispatch => bindActionCreators(QuadrimestreActions, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Ano))
