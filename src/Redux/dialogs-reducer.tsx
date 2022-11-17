import React from "react";
import {PostsType} from "../components/Profile/My posts/Myposts";



export const dialogsReducer = (state:any, action:any) => {


    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.newText
            break;
        case "SEND_MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 6, message: body})
            break;
    }
}
