import React from 'react';
import classes from'./ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://wallpapershome.ru/images/pages/pic_h/21486.jpg' alt='breach' />
            </div>
            <div className={classes.descriprionBlock}>
                ava + description
            </div>
            
        </div>)
}

export default ProfileInfo;