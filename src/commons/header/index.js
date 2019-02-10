import React from 'react';

 import {AppBar, Toolbar, Typography } from '@material-ui/core';

 import './Header.css';

 const Header = () => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="subtitle1" color="inherit">
                Pelada Futebol Clube
            </Typography>
        </Toolbar>
    </AppBar>
)

 export default Header; 