import React from "react";
import {PostsType} from "../components/Profile/My posts/Myposts";

let initialState =  {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "'Wassaaaap"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},

    ],
    dialogs: [
        {id: 1, name: "Nick"},
        {id: 2, name: "Lena"},
        {id: 3, name: "Artyom"},
        {id: 4, name: "Ruslan"},
        {id: 5, name: "Dimych"},
        {id: 6, name: "Protos"}],
    newMessageBody:""
}

export const dialogsReducer = (state:any = initialState, action:any) => {


    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.newText
            break;
        case "SEND_MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 6, message: body})
            break;
        default:
            return {...state}
    }
}
