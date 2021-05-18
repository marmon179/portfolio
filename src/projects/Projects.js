import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/style/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import one from '../assets/image/one.jpg'
import two from '../assets/image/two.jpg'
import three from '../assets/image/three.jpg'
import four from '../assets/image/four.jpg'
import five from '../assets/image/five.jpg'
import six from '../assets/image/six.jpg'
import seven from '../assets/image/seven.jpg'
import eight from '../assets/image/eight.jpg'

export function Projects() {
    return (
        <div className={style.projectsBlock} id="portfolio">
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My portfolio'}/>
                <div className={style.projects}>
                    <Project
                        title={'todolist'}
                        description={'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests'}
                        link={'https://marmon179.github.io/Todolist/'}
                        img={one}
                    />
                    <Project
                        title={'the social network'}
                        description={'TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests'}
                        link={'https://marmon179.github.io/Social-Barcelona-new/'}
                        img={two}
                    />
                    <Project
                        title={'counter'}
                        description={'My first project with React/Redux/TS.I left It here as a memory'}
                        link={'https://marmon179.github.io/Counter/'}
                        img={three}
                    />
                    <Project
                        title={'future project'}
                        img={four}
                        description={'...in progress'}
                        link={'link #4'}/>
                    <Project
                        title={'future project'}
                        img={five}
                        description={'...in progress'}
                        link={'link #5'}/>
                    <Project
                        title={'future project'}
                        img={six}
                        description={'...in progress'}
                        link={'link #6'}/>
                    <Project
                        title={"future project"}
                        img={seven}
                        description={"...in progress"}
                        link={"link #7"}/>
                    <Project
                        title={"future project"}
                        img={eight}
                        description={"...in progress"}
                        link={"link #8"}/>

                </div>
            </div>

        </div>
    );
}

