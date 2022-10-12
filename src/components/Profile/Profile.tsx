import React from 'react';
import s from './Profile.module.css'
import Myposts from "./My posts/Myposts";

const Profile = () => {
   return <div className={s.content}>
        <div>
            <img src="https://brandon.am/upload/13-05-2020/158938150326.jpg" alt=""/>
        </div>
        <div>
            ava+decrp
        </div>
       <Myposts/>
   </div>
}

export default Profile
