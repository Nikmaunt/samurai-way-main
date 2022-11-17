import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/StateTs";



 const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} addPost = {store. addPost.bind(store)} changePostText={store.changePostText}
        />,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree()