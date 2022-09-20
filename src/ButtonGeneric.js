import React from 'react';
import './buttonGeneric.css';

const ButtonGeneric = (props) => {
    return (
        <button className='main' style={{ backgroundColor: props.backgroundColor }} onClick={props.onClick}> {props.label}</button >
    )
}

export default ButtonGeneric