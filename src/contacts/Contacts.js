import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/style/Container.module.css';
import {Title} from '../common/components/title/Title';
import {Form} from './Form/Form';

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <Title text={'Contacts'}/>
                <Form/>
            </div>

        </div>
    )
}