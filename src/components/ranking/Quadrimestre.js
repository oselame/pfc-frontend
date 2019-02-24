import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });
  

const Quadrimetre = (props) => {
    const { classes } = props;
  return (
    <div>
        <Button variant="contained" className={classes.button}>
            1º
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            2º
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            3º
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Anual
        </Button>
    </div>
  )
}

export default withStyles(styles)(Quadrimetre);
