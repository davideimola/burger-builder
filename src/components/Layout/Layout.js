import React from 'react';

import style from './Layout.module.css';

const layout = (props) => (
        <>
            <div>Toolbar, SlideDrawer, Backdrop</div>
            <main className={style.Content}>
                {props.children}
            </main>
        </>
);

export default layout;