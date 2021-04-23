import React from 'react'
import style from './Project.module.css'


export function Project(props) {
    return (
        <div className={style.project}>
            <div  className={style.project_imgContainer}>
                    <a href='./#' className={style.icon}>Смотреть</a>
            </div>
                <div className={style.project_title}>{props.title}</div>
                <span className={style.project_description}>{props.description}</span>
        </div>

    );
}