import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";
import Like from "./Post/Likes";



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
           <Post message = "Hi how are you?"/>
           <Like likecounts= {15} />
           <Post message = 'Its my first post'/>
           <Like likecounts= {20} />

       </div>
   </div>)
}

export default Myposts
