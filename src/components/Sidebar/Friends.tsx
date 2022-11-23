import React from 'react';
import s from "../Dialogs/Dialogs.module.css";
import state from "../../Redux/Store";
import Post from "../Profile/My posts/Post/Post";
import store from "../../Redux/Store";


export const Frineds = (props: any) => {
    return <div className={s.friends}>{ store._state.messagesPage.messagesData}</div>
}

let a =  store._state.profilePage.posts