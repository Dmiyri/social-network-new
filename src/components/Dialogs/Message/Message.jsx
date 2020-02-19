import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = () => {
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
    ]

    let dialogsElements = dialogData.map(el=> <DialogItem  name={el.name} id={el.id}/>);
    let messagesElements = messagesData.map(el=> <MessageItem  message={el.message} id={el.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
