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
            ]
        }
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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                lekesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}




export default store;
window.store = store;