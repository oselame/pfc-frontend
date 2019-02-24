import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

class Ano extends Component {

  state = {
    nuAno: 0
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
          <InputLabel htmlFor="ano">Ano</InputLabel>
          <Select 
            value={this.state.nuAno}
            onChange={this.handleChange}
            name="nuAno">
              <MenuItem value={2016}>2016</MenuItem>
              <MenuItem value={2017}>2017</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </div>
    )
  }
}

export default Ano
