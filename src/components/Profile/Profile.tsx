import React from 'react';
import s from './Profile.module.css'
import Myposts, {PostsType} from "./My posts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state, {ActionsTypes} from "../../Redux/StateTs";

export type PostsTypeArsen = {
    posts: PostsType[]
    dispatch: (action:ActionsTypes ) => void
}


const Profile = (props:PostsTypeArsen) => {
    return (
        <div>
            <ProfileInfo/>
            <Myposts  posts={props.posts}
                      dispatch ={props.dispatch}
                      newPostText={state._state.profilePage.newPostText}/>.
        </div>
    )
}

export default Profile
