import React from 'react';
import  style from './Nav.module.scss'
import {Link} from "react-scroll";
import {BurgerMenu} from './BurgerMenu/BurgerMenu';

export  function Nav() {
    const items = ['home','skills','portfolio','contacts']
    return (
        <div className={style.navigation}>
            <div className={style.container}>
                {items.map((item,index) =>
                    <Link
                        key={index}
                        className={style.link}
                        activeClass={style.active}
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-99}
                        duration={500}
                    >{item}</Link>
                )}
                <BurgerMenu items={items}/>
            </div>
        </div>
    )
}