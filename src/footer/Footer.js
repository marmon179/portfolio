import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/style/Container.module.css';

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alex Lapko</h2>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h4 className={style.title}>2021 Все права защищены</h4>
            </div>

        </div>
    )
}