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
                    <Work title={'Todolist'}  description={'fggfgfdgfdgfgfdgfdgfdgfdgdgdgdgdfdfdfafdsafdsfdsf'}/>
                    <Work title={'Social'} description={'fggfgfdgfdgfgfdgfdgfdgfdgdgdgdg'}/>
                </div>
            </div>

        </div>
    );
}

