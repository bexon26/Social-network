const SEND_MESSAGE = 'SEND-MESSAGE';

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
   
}

const dialogReducer = (state = initialsState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state;
    }


}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogReducer;