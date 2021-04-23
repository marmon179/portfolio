import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/style/Container.module.css';

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h4 className={style.footer_title}>Alex Lapko</h4>
                <div className={style.socialContainer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h5 className={style.footer_title}>2021 Все права защищены</h5>
            </div>

        </div>
    )
}