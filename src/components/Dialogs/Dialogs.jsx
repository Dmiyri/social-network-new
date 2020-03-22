import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text =e.currentTarget.value;
        props.dispatch(updateNewMessageBodyActionCreator(text));
    }

    let dialogsElements = state.dialogs.map(el=> <DialogItem  name={el.name} id={el.id}/>);
    let messagesElements = state.messages.map(el=> <MessageItem message={el.message} id={el.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea onChange={onMessageChange}
                              placeholder='Enter your message'
                              value={state.newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
