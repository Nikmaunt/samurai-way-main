import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";

export type PostsTypeArr  = {
   posts: PostsType[]
}
export type PostsType  = {
    id: number
    message: string
    likesCount: number
}

const Myposts = (props:PostsTypeArr) => {

 let postsElemet = props.posts.map((p: { message: string; likesCount: number; }) =>  <Post message={p.message} likesCount={p.likesCount}/>)

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
            {postsElemet}
        </div>
    </div>)
}

export default Myposts
