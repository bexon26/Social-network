import React from 'react';
import classes from './Users.module.css';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>

        <div className="">
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>


        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={
                            u.photos.small !== null ?
                                u.photos.small :
                                'https://sun9-15.userapi.com/c629404/v629404957/8a5/8841YpL9Pcw.jpg'
                        } alt="" className={classes.userPhoto} />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {'u.location.country'} </div>
                        <div> {'u.location.city'} </div>
                    </span>
                </span>


            </div>)
        }
        </div>
}

export default Users;