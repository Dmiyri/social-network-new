import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


let postsData = [
    {message: `Hi? how are you?`, like:`like 10`},
    {message: `Bla bla`, like:`like 10`},
    {message: `sdgds`, like:`like 10`},
    {message: `Bla bla`, like:`like 10`},
];
let dialogData = [
    {id: 1, name:'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
];
let messagesData = [
    {id: 1, message: 'Hi' },
    {id: 2, message:'How is you learn?'},
    {id: 3, message:'How are you?'},
    {id: 4, message:'Bred'},
];

ReactDOM.render(
    <BrowserRouter>
        <App postsData={postsData} dialogData={dialogData} messagesData={messagesData}/>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
