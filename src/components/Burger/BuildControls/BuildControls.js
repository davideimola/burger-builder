import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import style from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => (
    <div className={style.BuildControls}>
        <p>Total: <strong>{props.price.toFixed(2)}€</strong></p>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>;
        })}
        <button
            className={style.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchasing}>
            {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;