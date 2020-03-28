import React from 'react';
import s from './users.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/images/31.jpg';

class Users extends React.Component {
    
    componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger;
                this.props.setUsers(response.data.items);
            });
        }

    render() {
        return (
            <div>
                
                {   this.props.users.map((u) => <div key={u.id} className={s.userGrid}>
                    <div className={s.userGridButtonContainer}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div className={s.userGridButtonContainer}>
                            { u.followed 
                            ? <button className={s.userGridButton} onClick = {()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button className={s.userGridButton} onClick = {()=>{this.props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </div>
    
                    <div className={s.userGridProfile}>
                        <div className={s.userGridProfileStatus}>
                            <div className={s.userGridFullName}>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </div>
                    </div>
                   </div>)
            }</div>
    )
    }
}


export default Users;