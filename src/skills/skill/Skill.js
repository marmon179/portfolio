import React from 'react'
import style from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export function Skill({title, titleIcon, description}) {
    return (
        <div className={style.skill}>
            <div className={style.image}>
                <FontAwesomeIcon icon={titleIcon} className={style.icon}/>
            </div>
            <h5>{title}</h5>
            <hr className={style.hR}/>
            <p>{description}</p>
        </div>
    );
}
