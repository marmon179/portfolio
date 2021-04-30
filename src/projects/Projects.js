import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/style/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/depositphotos_314607474-stock-illustration-to-do-list-badge-with.jpg'
import socialImage from '../assets/image/social-blog.jpg'

export function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todo} title={'Todolist'} description={'Project description'}/>
                    <Project style={social} title={'Social'}
                             description={'Project description Hello Hello Hello Hello Hello Hello'}/>
                </div>
            </div>

        </div>
    );
}

