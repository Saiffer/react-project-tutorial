import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
          My posts
          <div>New post</div>
          <div className={s.posts}>
            <Post message="Hi, how are you?" likesCount="3"/>
            <Post message="It's my first post" likesCount="10"/>
            <Post />
            <Post />
          </div>
        </div>
    );
}

export default MyPosts;