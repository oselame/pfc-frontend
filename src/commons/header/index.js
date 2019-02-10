import React from 'react';

 import AppBar from '@material-ui/core/AppBar';

 import './Header.css';

 const Header = () => (
    <AppBar position="static" color="primary">
        <div className="header">
            <p className="title">Pelada Futebol Clube</p>
        </div>
    </AppBar>
)

 export default Header; 