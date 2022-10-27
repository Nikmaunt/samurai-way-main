import React from 'react';
import s from "../Dialogs/Dialogs.module.css";
import state from "../../Redux/StateTs";
import Post from "../Profile/My posts/Post/Post";


export const Frineds = (props: any) => {
    return <div className={s.friends}>{state.messagesPage.messagesData}</div>
}

let a = state.profilePage.posts