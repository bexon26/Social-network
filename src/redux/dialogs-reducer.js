const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialsState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Vadim' },
        { id: 4, name: 'Lesha' },
        { id: 5, name: 'Olya' },
        { id: 6, name: 'Nastya' },
        { id: 7, name: 'Petya' },
        { id: 8, name: 'Kolya' },
        { id: 9, name: 'Inga' },
        { id: 10, name: 'Vera' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is it-kamasutra' },
        { id: 3, message: 'Good' },
        { id: 4, message: 'Yes' },
        { id: 5, message: 'By-by' },
    ],
    newMessageBody: ''
}

const dialogReducer = (state = initialsState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state;
    }


}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogReducer;