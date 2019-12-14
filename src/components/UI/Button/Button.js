import React from 'react';

import style from './Button.module.css';

const button = (props) => (
    <button
        onClick={props.clicked}
        disabled={props.disabled}
        className={[style.Button, style[props.btnType]].join(' ')}
    >
        {props.children}
    </button>
);

export default button;