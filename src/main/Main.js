import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../../src/common/style/Container.module.css'
import photo from '../assets/image/photo.jpg'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <h5>Hello, my name is</h5>
                    <h1>Alex Lapko</h1>
                    <h5>Front-end Developer based in #Minsk</h5>
                </div>
                <div className={style.photo}>
                    <img src={photo} alt="it's me"/>
                </div>
            </div>
        </div>
    )
}