import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} 
                    newPostText={props.state.newPostText}
                    updateNewPostText={props.updateNewPostText}
                        addPost={props.addPost}/>
        </div>)
         console.log(props)
}

export default Profile;