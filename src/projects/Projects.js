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
        <div className={style.projectsBlock} id="portfolio">
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My portfolio'}/>
                <div className={style.projects}>
                    <Project style={todo}
                             title={'todolist'}
                             description={'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests'}
                             link ={'https://marmon179.github.io/Social-Barcelona-new/'}
                    />
                    <Project style={social}
                             title={'the social network'}
                             description={'TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}
                             link ={'https://marmon179.github.io/Social-Barcelona-new/'}
                    />

                </div>
            </div>

        </div>
    );
}

