const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialsState = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 20 },
            { id: 2, message: 'Its my first post', likesCount: 39 },

        ],
        newPostText: 'it-camasutra'
}

const profileReducer = (state=initialsState, action) => {
    if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state.newPostText = action.newText;
        } 
        console.log(state)
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;