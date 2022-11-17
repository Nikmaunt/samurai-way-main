import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rerenderEntireTree = () => {
     console.log('CHANGEEE')
 }

type MessagesDataType = {
    id:number
    message:string
}

export type DialogsType = {
    id:number
    name:string
}
type PostsType = {
    id:number
    message:string
    likesCount: number
}

type ProfilePageType = {
  posts: PostsType[]
    newPostText: string
}

type MessagesPageType = {
    messagesData: MessagesDataType[]
    dialogs: DialogsType[]
    newMessageBody:string
}

type SidebarType = {
    id:number
    name:string
                             }

export type StateType = {
    state:RouteStateType
}


export type RouteStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType[]

}

// export const addPost = () => {
//     const newPost:PostsType = {
//     id: new Date().getTime(),
//     message: state.profilePage.newPostText,
//     likesCount: 0
// };
//     let copyNew = state.profilePage.posts
//     copyNew.push(newPost)
//     state.profilePage.newPostText=''
//     rerenderEntireTree();
// }
//
//
// //
// // let state: RouteStateType = {
// //     profilePage: {
// //         posts: [
// //             {id: 1, message: "HiHi how are you", likesCount: 12},
// //             {id: 2, message: "Its my first post?", likesCount: 14}
// //         ],
// //         newPostText: "IT KAMASUTRA"
// //     },
// //     messagesPage: {
// //         messagesData: [
// //             {id: 1, message: "Hi"},
// //             {id: 2, message: "How are you?"},
// //             {id: 3, message: "'Wassaaaap"},
// //             {id: 4, message: "Yo"},
// //             {id: 5, message: "Yo"},
// //         ],
// //         dialogs: [
// //             {id: 1, name: "Nick"},
// //             {id: 2, name: "Lena"},
// //             {id: 3, name: "Artyom"},
// //             {id: 4, name: "Ruslan"},
// //             {id: 5, name: "Dimych"},
// //             {id: 6, name: "Protos"}],
// //     },
// //         sidebar: [ {id: 1, name: "Nick"},
// //             {id: 2, name: "Lena"},
// //             {id: 3, name: "Artyom"}]
// // }
//
// export const changePostText = (newText:string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree()
// }
//
//  export const subscribe = (observer: () =>void) =>{
//   rerenderEntireTree= observer
//  }

 export type StoreType ={
     _state:RouteStateType
     changePostText:(newText:string)=>void
     addPost:()=> void
     _callSubscriber:() =>void
     subscribe: (observer: () =>void) => void
     getState:()=> RouteStateType
     dispatch:(action:ActionsTypes)=> void
 }
  export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof ChangeNewTextActionAC> | ReturnType<typeof UPDATE_NEW_MESSAGE_BODY_AC> | ReturnType<typeof SEND_MESSAGE_AC>

 export const addPostAC = ( postText: string) => {
return {
    type:"ADD-POST",
    postText: postText
} as const
 }
 export const  ChangeNewTextActionAC = (  newPost: string)  => {
     return {
         type:"CHANGE-POST-TEXT",
         newPost:  newPost
     } as const
 }
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


const store:StoreType =  {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "HiHi how are you", likesCount: 12},
                {id: 2, message: "Its my first post?", likesCount: 14}
            ],
            newPostText: "IT KAMASUTRA"
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "'Wassaaaap"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},

            ],
            dialogs: [
                {id: 1, name: "Nick"},
                {id: 2, name: "Lena"},
                {id: 3, name: "Artyom"},
                {id: 4, name: "Ruslan"},
                {id: 5, name: "Dimych"},
                {id: 6, name: "Protos"}],
            newMessageBody:""
        },
        sidebar: [{id: 1, name: "Nick"},
            {id: 2, name: "Lena"},
            {id: 3, name: "Artyom"}]
    },

    _callSubscriber  ()  {
        console.log('CHANGEEE')
    },

    getState (){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber= observer
    },
  addPost ()  {
        const newPost:PostsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        let copyNew = this._state.profilePage.posts
        copyNew.push(newPost)
       this._state.profilePage.newPostText=''
        rerenderEntireTree();
    },
    changePostText (newText:string)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    dispatch(action){
        profileReducer(  this._state.profilePage,action )
       dialogsReducer(  this._state.messagesPage,action )
       sidebarReducer(  this._state.sidebar,action )
        this._callSubscriber()

}
    }

    export default store
