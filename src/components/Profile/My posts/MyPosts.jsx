import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className='posts'>
                <Post message='Hi, how are you?' like='20' />
                <Post message='Its my first post' like='39' />
            </div>

        </div>
    )

}

export default MyPosts;