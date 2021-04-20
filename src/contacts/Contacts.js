import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/style/Container.module.css';

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form action="demo_form.asp" className={style.contacts}>
                        <input type="text" className={style.inputs}/>
                        <input type="text" className={style.inputs}/>
                        <textarea className={style.textarea}></textarea>
                    </form>
                <div>
                    <div className={style.iconSubmit}>Отправить</div>
                </div>
            </div>

        </div>
    )
}