import React from 'react'
import style from './Title.module.scss'


export function Title(props) {
    return (
        <div >
            <h2 className={style.title}>{props.text}</h2>
        </div>
    );
}

