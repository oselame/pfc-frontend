import React from 'react';

import logo from '../../splash.png';

import './Splash.css';

const Splash = (props) => (
    <div className="splash">
        <header className="splash-header">
            <img src={logo} className="splash-logo" alt="logo" />
        </header>
    </div>
)

export default Splash;