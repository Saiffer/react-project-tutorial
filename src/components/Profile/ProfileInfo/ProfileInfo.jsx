import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo;
