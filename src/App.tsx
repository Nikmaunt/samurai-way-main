import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"
import Profile, {PostsTypeArr} from "./components/Profile/Profile";
import {Dialogs, DialogsPropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RouteStateType} from "./Redux/StateTs";
import {Sidebar} from "./components/Sidebar/Sidebar";


type AppPropsType = {
    state: RouteStateType
}

const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs
                            dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messagesData}/>}/>
                        <Route path="/profile" element={<Profile posts={props.state.profilePage.posts}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
