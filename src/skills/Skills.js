import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../../src/common/style/Container.module.css'
import {Skill} from './skill/Skill';


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills} >
                    <Skill title = {'JS'} description={'sed do eiusmod tempor incididunt ....dsdsdsvdsvdsvdsvsdvdvdfdfdfdfdfdffdssddffdsfs'}/>
                    <Skill title = {'CSS'} description={'sed do dfdf dffdfl lkllm ....'}/>
                    <Skill title = {'React'} description={'sed do e333t dfa incididunt ....'}/>
                </div>

            </div>
        </div>
    );
}

