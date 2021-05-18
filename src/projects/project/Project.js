import React from 'react'
import style from './Project.module.scss'


export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image} style={{backgroundImage: `url(${props.img})`}}>
                <div className={style.overlay}>
                    <div className={style.description}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div className={style.wrapperButton}>
                            <a href={props.link} className={style.btn} target="_blank"
                               rel="noreferrer">view project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}