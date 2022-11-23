import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
// import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./Store";



let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogsReducer,
    // sidebar: sidebarReducer
})
export const reduxStore = createStore(reducers)

export type RootStore = ReturnType<typeof reduxStore.getState>
export type StoreDispatchType = typeof reduxStore.dispatch
export type AppStateType = ReturnType<typeof reducers>
