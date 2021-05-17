import React from 'react';
import style from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Form} from './Form/Form';

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={'Contacts'}/>
                <div className={style.formAnData}>
                    <Form/>
                </div>
            </div>

        </div>
    )
}