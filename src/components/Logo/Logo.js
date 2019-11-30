import React from 'react';

import burgerLogo from '../../assets/images/logo.png';

import style from './Logo.module.css';

const logo = (props) => (
    <div className={style.Logo}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);

export default logo;