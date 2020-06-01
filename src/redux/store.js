import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 20 },
                { id: 2, message: 'Its my first post', likesCount: 39 },
    
            ],
            newPostText: 'it-camasutra'
    
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('kjkj')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        
    }
}





export default store;
window.store = store;