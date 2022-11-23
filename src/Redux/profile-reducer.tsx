import React from "react";
import {PostsType} from "../components/Profile/My posts/Myposts";
import {RootStore} from "./redux-store";


let initialState = {
    posts: [
        {id: 1, message: "HiHi how are you", likesCount: 12},
        {id: 2, message: "Its my first post?", likesCount: 14}
    ],
    newPostText: "IT KAMASUTRA"
}

export const profileReducer = (state = initialState, action:any) => {

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
        default:
            return {...state}
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

