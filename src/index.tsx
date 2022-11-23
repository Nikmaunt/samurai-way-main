import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store, {StateType, StoreType} from "./Redux/Store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {reduxStore} from "./Redux/redux-store";

const rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <BrowserRouter>

            <Provider store={reduxStore}>
                <App store={store} />
            </Provider>
        </BrowserRouter>,

    document.getElementById('root')
    );
}


//  //
//  // const rerenderEntireTree = (state:any) => {
//  //    ReactDOM.render(
//  //        <App store={store} />,
//  //        document.getElementById('root')
//  //    );
// }

rerenderEntireTree(store.getState())

store.subscribe( ()=> {
    let state = store.getState()
    rerenderEntireTree(state)})

