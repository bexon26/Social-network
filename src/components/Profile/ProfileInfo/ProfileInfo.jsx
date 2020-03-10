import React from 'react';
import classes from'./ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://amp.thenational.ae/image/policy:1.172937:1499300331/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8' alt='breach' />
            </div>
            <div className={classes.descriprionBlock}>
                ava + description
            </div>
            
        </div>)
}

export default ProfileInfo;