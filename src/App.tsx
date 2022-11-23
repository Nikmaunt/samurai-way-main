import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import store, {StoreType} from "./Redux/Store";
import {Sidebar} from "./components/Sidebar/Sidebar";


type AppPropsType = {
    store: StoreType
}


const App: React.FC<AppPropsType> = (p) => {
    let state = store.getState()
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/" element={<Dialogs dialogs={store._state.messagesPage.dialogs}
                                                                   messages={store._state.messagesPage.messagesData}
                                                                   store={store}/>}/>
                        <Route path="/profile"
                               element={<Profile posts={store._state.profilePage.posts}
                                                 dispatch={store.dispatch.bind(store)}
                               />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}


export default App;
