import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        </div>
        <div>ava+description</div>
        <MyPosts />
      </div>
    );
}

export default Profile;