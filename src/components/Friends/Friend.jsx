import React from 'react';
import s from './Friend.module.css'
import { NavLink } from 'react-router-dom';              
                
const Friend = (props) => {
   
    let path = "/friends/" + props.id;
    return (
        <span className={s.friendsContainer}>
            <span className={s.circleImg}></span>
            <NavLink to={path}>{props.name}</NavLink>
        </span>
    )
}  
                
export default Friend;           