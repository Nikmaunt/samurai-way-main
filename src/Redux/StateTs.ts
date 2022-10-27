

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
}

type MessagesPageType = {
    messagesData: MessagesDataType[]
    dialogs: DialogsType[]
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

let state: RouteStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "HiHi how are you", likesCount: 12},
            {id: 2, message: "Its my first post?", likesCount: 14}
        ]
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
    },
        sidebar: [ {id: 1, name: "Nick"},
            {id: 2, name: "Lena"},
            {id: 3, name: "Artyom"}]
}
export default state