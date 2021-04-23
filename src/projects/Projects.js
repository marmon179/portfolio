import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../common/style/Container.module.css';
import {Project} from './project/Project';


export function Projects() {
    return (
        <div className={style.Projects}>
            <div className={`${styleContainer.container} ${style.ProjectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projectContainer} >
                    <Project title={'Todolist'} description={'Project description'}/>
                    <Project title={'Social'} description={'Project description'}/>
                </div>
            </div>

        </div>
    );
}

