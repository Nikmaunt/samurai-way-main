import React from "react";
import {PostsType} from "../components/Profile/My posts/Myposts";



export const profileReducer = (state:any, action:any) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case "CHANGE-POST-TEXT":
            state.newPostText = action.newPost
            break;
    }}

export const  UPDATE_NEW_MESSAGE_BODY_AC = (   text: string)  => {
    return {
        type:"UPDATE_NEW_MESSAGE_BODY",
        newText:  text
    } as const
}

export const  SEND_MESSAGE_AC = ( )  => {
    return {
        type:"SEND_MESSAGE"
    } as const
}

