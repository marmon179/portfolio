import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/style/Container.module.css';

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form action="demo_form.asp" className={style.contacts}>
                        <div className={style.inputs}><input type="text"/></div>
                        <div className={style.inputs}><input type="text"/></div>
                        <div className={style.textarea}><textarea></textarea></div>
                    </form>
                <div>
                    <span className={style.iconSubmit}>Отправить</span>
                </div>
            </div>

        </div>
    )
}