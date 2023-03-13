import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <h1><span>F</span>ilm</h1>
            <div>
                <span>Change Mode</span>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

export default Header;