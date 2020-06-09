import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';


export const userPhoto = 'https://sun9-15.userapi.com/c629404/v629404957/8a5/8841YpL9Pcw.jpg';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto
                        } alt="" className={classes.userPhoto} />

                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>UnFollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                </span>
                <span>
                    <div> {'user.location.country'} </div>
                    <div> {'user.location.city'} </div>
                </span>
            </span>


        </div>
    )
}


export default User;