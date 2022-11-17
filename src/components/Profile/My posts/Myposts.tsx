import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, ChangeNewTextActionAC} from "../../../Redux/StateTs";
import {type} from "os";

export type PostsTypeArr  = {
    posts: PostsType[]
    newPostText:string
    dispatch: (action:ActionsTypes ) => void
}
export type CAllTypeArr  ={
    addPost: (postMessage:string)=> void
    changePostText: (newText:string) => void
}
export type PostsType  = {
    id: number
    message: string
    likesCount: number
}

let addPostActionCreator

const Myposts = (props:PostsTypeArr) => {

 let postsElemet = props.posts.map((p: { message: string; likesCount: number; }) =>  <Post message={p.message} likesCount={p.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
         // props.addPost();
        // props.dispatch({type: "ADD-POST", postText: props.newPostText})
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        // props.changePostText(e.currentTarget.value)
        // props.dispatch({type:"CHANGE-POST-TEXT",newPost: e.currentTarget.value} )
        props.dispatch(ChangeNewTextActionAC(e.currentTarget.value) )

    }

    return (<div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>
        <div className={s.posts}>
            {postsElemet}
        </div>
    </div>)
}

export default Myposts
