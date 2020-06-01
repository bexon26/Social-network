import React from 'react';
import classes from'./ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile ){
        return <Preloader />
    }
    return (
        <div >
            {/* <div>
                <img src='https://amp.thenational.ae/image/policy:1.172937:1499300331/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8' alt='breach' />
            </div> */}
            <div className={classes.descriprionBlock}>
                <img src={profile.photos.large} />
                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            
        </div>)
}

export default ProfileInfo;