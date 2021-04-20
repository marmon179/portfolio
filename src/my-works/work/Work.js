import React from 'react'
import style from './Work.module.css'


export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.img}>
                <div className={style.icon}>
                    <h3>Смотреть</h3>
                </div>
            </div>
            <div className={style.description}>
                <span className={style.nameProject}>Название проекта</span>
                <span className={style.shortDescription}>Краткое описание</span>

            </div>

        </div>

    );
}