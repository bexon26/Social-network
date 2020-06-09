import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My posts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} 
            isOwner={props.isOwner} 
            profile = {props.profile} 
            status={props.status} 
            saveProfile={props.saveProfile}
            updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>)
}

export default Profile;