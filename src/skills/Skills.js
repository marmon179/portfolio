import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../../src/common/style/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import {faBriefcase, faLaptopCode, faTasks} from '@fortawesome/free-solid-svg-icons';
import {faSketch} from '@fortawesome/free-brands-svg-icons';


export function Skills() {
    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My Skills'}/>
                <div className={style.skills}>
                    <Skill title={'DEVELOPMENT'} description={'React, Redux, AXIOS etc'} titleIcon={faLaptopCode}/>
                    <Skill title={'FOUNDATION'} description={'JavaScript, TypeScript, HTML5, CSS3'}
                           titleIcon={faBriefcase}/>
                    <Skill title={'TESTING'} description={'Unit Tests, SnapShot, Storybook'} titleIcon={faTasks}/>
                    <Skill title={'DESIGN'} description={'Material UI, Ant-Design etc'} titleIcon={faSketch}/>
                </div>

            </div>
        </div>
    );
}

