import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";


const  Myposts = () => {
   return (<div>
        <div >
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
       <div className={s.posts}>
           <Post message = "Hi how are you?" likesCount = {0} />
           <Post message = 'Its my first post' likesCount = {23}/>
       </div>
   </div>)
}

export default Myposts
