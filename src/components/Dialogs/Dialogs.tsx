import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: string
}
type MessageProps = {
    message: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/1*' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


const Message = (props: MessageProps) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Nick' id='1'/>
                <DialogItem name='Lena' id='2'/>
                <DialogItem name='Artyom' id='3'/>
                <DialogItem name='Ruslan' id='4'/>
                <DialogItem name='Dimych' id='5'/>
                <DialogItem name='Protos' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Wassaaaap'/>
            </div>
        </div>
    )
}