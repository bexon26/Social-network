import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
    

    let postsElements = props.posts
    .map( p => <Post message={p.message} like={p.likesCount} />)
    
    return (
        <div className={classes.postsBlock}>
            My posts
            <div>
                New post
            </div>
            <div className='posts'>
                {postsElements}
            </div>

        </div>
    )

}

export default MyPosts;