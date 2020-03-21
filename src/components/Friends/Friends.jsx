import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend'
import { NavLink } from 'react-router-dom';
import store from './../../redux/redux-store';

const Friends = () => {
    
    let state = store.getState().sidebar;
    let friends = state.sidebar.map((friend) => {
        console.log(friend);
        return <Friend id={friend.id}  name={friend.name} />
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