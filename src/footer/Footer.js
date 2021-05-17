import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/style/Container.module.css';
import {Title} from '../common/components/title/Title';

export function Footer() {
    const items = [
        {
            href: 'https://github.com/marmon179',
            title: 'git'
        },
        {
            href: 'https://marmon179@gmail.com',
            title: 'email'
        },
        {
            href: 'https://t.me/AlexLapko',
            title: 'telegram'
        },

    ]
    return (

        <div className= {style.footerContainer}>
            <p className={style.copyRightBlock}>© 2021, All Rights Reserved.</p>
            <ul>
                {items.map((e, i) => <li key={i}><a href={e.href} target="_blank" rel="noreferrer">{e.title}</a>
                </li>)}
            </ul>

        </div>


    )
}