import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../../src/common/style/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text ={'Skills'}/>
                <div className={style.skills} >
                    <Skill title = {'JS'} description={'Hello Heloo leo eloe lfj dfhjd kjdf id hkhj kdfd eeij ijnnknn khhf nn '}/>
                    <Skill title = {'CSS'} description={'sed do dfdf dffdfl lkllm ....'}/>
                    <Skill title = {'React'} description={'sed do e333t dfa incididunt ....'}/>
                </div>

            </div>
        </div>
    );
}
