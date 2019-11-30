import React from 'react';

import style from './Backdrop.module.css'

const backdrop = (props) => (
    props.show ? <div className={style.Backdrop} onClick={props.closeModal}></div> : null
);

export default backdrop;