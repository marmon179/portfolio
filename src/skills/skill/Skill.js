import React from 'react'
import style from './Skill.module.scss'


export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.image}>

            </div>
            <h5>{props.title}</h5>
            <hr className={style.hR}/>
            <p>{props.description}</p>
        </div>
    );
}
