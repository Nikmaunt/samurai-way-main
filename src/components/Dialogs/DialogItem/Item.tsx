import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/1*' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

