import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend'
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    let friends = props.state.sidebar.map((friend) => {
        console.log(friend);
        return <Friend id={friend.id} name={friend.name} />
    });
    
    return(
        <div className={s.friendsField}>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <div className={s.friendItem}>
                
                { friends }
                
            </div>   
        </div>
    )
}

export default Friends;