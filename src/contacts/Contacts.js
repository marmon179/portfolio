import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/style/Container.module.css';
import {Title} from '../common/components/title/Title';

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <Title text={'Contact'}/>
                <form className={style.contactForm}>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='E-mail'/>
                    <textarea placeholder='Your message'/>
                    <button type="submit" className={style.submitBtn}>Отправить</button>
                </form>
            </div>

        </div>
    )
}