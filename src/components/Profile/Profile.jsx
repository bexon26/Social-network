import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './My posts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://wallpapershome.ru/images/pages/pic_h/21486.jpg' alt='breach' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>)
}

export default Profile;