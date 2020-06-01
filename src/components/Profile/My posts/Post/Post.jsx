import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://amp.thenational.ae/image/policy:1.172937:1499300331/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8' alt='avatar'></img>
            {props.message}
            <div>
                <span>liked {props.like} </span>
            </div>
            
        </div>

    )

}

export default Post;