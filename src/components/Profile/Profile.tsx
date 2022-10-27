import React from 'react';
import s from './Profile.module.css'
import Myposts, {PostsType} from "./My posts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export type PostsTypeArr  = {
    posts: PostsType[]
}
const Profile = (props:PostsTypeArr) => {
    return (
        <div>
            <ProfileInfo/>
            <Myposts posts={props.posts}/>
        </div>
    )
}

export default Profile
