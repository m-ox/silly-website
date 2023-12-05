import React, { useState, useEffect } from 'react';
import clickSfx from '../assets/sounds/selection.wav';

// todo: maybe special cursor for message items?
function Item({children, className, onClick, message}) {
    const clickSound = new Audio(clickSfx);

    useEffect(() => {
    }, []);

    const onClickFunc = () => {
        clickSound.play();
        onClick();
    }

    return (
        <div className={`item ${className}`} onClick={() => onClickFunc()}>
            {children}
        </div>
    );
}

export default Item;