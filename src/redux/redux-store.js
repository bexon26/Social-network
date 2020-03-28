import {createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: userReducer
});

let store = createStore(reducers);

window.store = store;

export default store;