import React from 'react';
import style from './Hire.module.css'
import styleContainer from '../../src/common/style/Container.module.css'

export function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h3 className={style.title}>I am available for Freelance</h3>
                < a href="" className={style.hireBtn}>Нанять меня</a>
            </div>
        </div>
    )
}