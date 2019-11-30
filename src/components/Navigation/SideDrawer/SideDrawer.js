import React from 'react';

import style from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [style.SideDrawer, style.Close];

    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open];
    }

    return (
        <>
            <Backdrop show={props.open} closeModal={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={style.Logo}>
                    <Logo />
                </div>
               <nav>
                   <NavigationItems />
               </nav>
            </div>
        </>
    );
};

export default sideDrawer;