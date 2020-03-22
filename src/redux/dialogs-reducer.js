const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody,
            };
            state.newMessageBody = '';
            state.messages.push(newMessage);
            break;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        default: return state;
    }
    return state;
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};
export const updateNewMessageBodyActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: text}
};

export default dialogsReducer;


