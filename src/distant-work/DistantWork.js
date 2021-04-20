import React from 'react';
import style from './DistantWork.module.css'
import styleContainer from '../../src/common/style/Container.module.css'

export function DistantWork() {
    return (
        <div className={style.distantBlock}>
            <div className={styleContainer.container}>
                <div className={style.distantContainer}>
                    <h3 className={style.containerDistantWork}>Рассматриваю варианты удаленной работы</h3>
                    <span className={style.iconWorkDistant}>Нанять меня</span>
                </div>
            </div>
        </div>
    )
}