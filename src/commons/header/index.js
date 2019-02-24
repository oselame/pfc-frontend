import React, { Component } from 'react';

import {AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import './Header.css';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 25,
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: 80,
  },
  links: {
    paddingRight: 10
  }
});

 class Header extends Component{
    
     render() {

        const { classes } = this.props;
        
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="subtitle1" color="inherit">
                            Pelada Futebol Clube
                        </Typography>
                    </Toolbar>
                </AppBar>    
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/ultimapartida'>Última Partida</Link>
                    </Typography>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/ranking'>Ranking</Link>                    
                    </Typography>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/artilheiro'>Artilheiro</Link>
                    </Typography>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/aniversariantes'>Aniversariantes</Link>
                    </Typography>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/jantas'>Jantas</Link>
                    </Typography>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/galerias'>Galerias</Link>
                    </Typography>
                    <Typography variant="button" component="h3" className={classes.links}>
                        <Link to='/historia'>História</Link>
                    </Typography>
                </Paper>
                
            </div>
        )
    }
 }

 export default withStyles(styles)(Header); 