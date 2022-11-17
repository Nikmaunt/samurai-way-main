import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from "./DialogItem/Item";
import {Message, MessageProps} from "./Message/Message";
import {SEND_MESSAGE_AC, UPDATE_NEW_MESSAGE_BODY_AC} from "../../Redux/StateTs";


export type DialogsPropsType = {
    store: any;
    messages: MessageProps[]
    dialogs: DialogItemProps []

}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().messagesPage

    let dialogsElemets = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElemets = props.messages.map(m => <Message message={m.message}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let newMessageBody =  props.store.newMessageBody
    let addMessage = () => {
        alert(newMessageElement.current?.value)
    }
    let onSendMessageClick = () => {
        props.store.dispatch(SEND_MESSAGE_AC())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
      let body =  e.target.value
        props.store.dispatch(UPDATE_NEW_MESSAGE_BODY_AC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                <div>{messagesElemets}</div>
                <div>
                    <div><textarea value = {newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> add </button>
                    </div>
                </div>
            </div>
        </div>
    )
}