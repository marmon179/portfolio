import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/style/Container.module.css';

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.contacts_title}>Contacts</h2>
                <form className={style.contacts_Form}>
                    <input type="text" className={style.contacts_inputs}/>
                    <input type="text" className={style.contacts_inputs}/>
                    <textarea className={style.contacts_textarea}></textarea>
                </form>
                <div className={style.iconSubmit}>Отправить</div>
            </div>

        </div>
    )
}