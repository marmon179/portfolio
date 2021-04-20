import React from 'react'
import style from './MyWorks.module.css'
import styleContainer from '../common/style/Container.module.css';
import {Work} from './work/Work';


export function MyWorks() {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works} >
                    <Work img ={'https://image.winudf.com/v2/image/Y29tLnJlbi53YWxscGFwZXIuYmVhdXRpZnVsYmFja2dyb3VuZHdhbGxwYXBlcnNoZF9zY3JlZW5zaG90c180X2I2MmZjNzc2/screen-4.jpg?fakeurl=1&type=.jpg'} />
                    <Work />
                </div>
            </div>

        </div>
    );
}

