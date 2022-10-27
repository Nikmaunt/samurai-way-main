import React from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from "./DialogItem/Item";
import {Message, MessageProps} from "./Message/Message";




export type DialogsPropsType = {
    messages: MessageProps[]
    dialogs:  DialogItemProps []

}

export const Dialogs = (props:DialogsPropsType) => {
    let dialogsElemets =  props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElemets = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                {messagesElemets}
            </div>
        </div>
    )
}