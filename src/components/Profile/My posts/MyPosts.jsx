import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {
    
    let postsElements = props.posts
    .map( p => <Post message={p.message} like={p.likesCount} />)
    
    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.textBlock}>
                <div className="">
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div className="">
                    <button className={classes.addPost__button} onClick={ addPost} >Add post</button>
                </div>
            </div>
            <div className='posts'>
                {postsElements}
            </div>

        </div>
    )

}

export default MyPosts;