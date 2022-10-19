import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";


const Myposts = () => {
    return (<div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
        </div>
        <div className={s.posts}>
            <Post message="Hi how are you?" likesCount={0}/>
            <Post message='Its my first post' likesCount={23}/>
        </div>
    </div>)
}

export default Myposts
