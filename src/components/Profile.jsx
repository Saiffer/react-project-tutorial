import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
        </div>
        <div>ava+description</div>
        <div>
          My posts
          <div>New post</div>
          <div className={s.posts}>
            <div className={s.item}>1</div>
            <div className={s.item}>2</div>
          </div>
        </div>
      </div>
    );
}

export default Profile;