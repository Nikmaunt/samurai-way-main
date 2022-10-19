import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://brandon.am/upload/13-05-2020/158938150326.jpg" alt=""/>
            </div>
            <div className={s.descrBlock}>
                ava+decription
            </div>
        </div>
    )
}


