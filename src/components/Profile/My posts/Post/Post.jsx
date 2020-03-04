import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://www.1zoom.me/big2/946/289597-frederika.jpg' alt='avatar'></img>
            {props.message}
            <div>
                <span>liked {props.like} </span>
            </div>
            
        </div>

    )

}

export default Post;