import React from 'react';
import style from './DistantWork.module.css'
import styleContainer from '../../src/common/style/Container.module.css'

export function DistantWork() {
    return (
        <div className={style.distantBlock}>
            <div className={`${styleContainer.container} ${style.workDistantContainer}`}>
                <div className={style.distantContainer}>
                    <div className={style.containerDistantWork}>
                        <h3>Рассматриваю варианты удаленной работы</h3>
                    </div>
                    <span className={style.iconWorkDistant}>Нанять меня</span>
                </div>
            </div>
        </div>
    )
}