import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

 let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 20 },
            { id: 2, message: 'Its my first post', likesCount: 39 },
        ],
        
    }

test('lenght of post shoud be incremented', () => {
    //1.test data
    let action = addPostActionCreator('it-kamasutra.com');
    //2.action
    let newWState = profileReducer(state, action)
    //3.expectation
    expect (newWState.posts.length).toBe(3);
 
});

test('message of new post should be correct', () => {
    //1.test data
    let action = addPostActionCreator('it-kamasutra.com');
    //2.action
    let newWState = profileReducer(state, action);
    //3.expectation
    expect (newWState.posts[2].message).toBe("it-kamasutra.com");
});


test('after deleting of messages should be decrement', () => {
    //1.test data
    let action = deletePost(1);
    //2.action
    let newWState = profileReducer(state, action);
    //3.expectation
    expect (newWState.posts.length).toBe(1);
});


