import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

  let posts = [
    {id: 1, postText: 'Hi, how are you?', likesCount: 3},
    {id: 2, postText: 'This is my first post', likesCount: 23},
    {id: 3, postText: 'Wasssap', likesCount: 13}
  ];

let postsElements = posts.map((post) => {
  return <Post message={ post.postText } likesCount={ post.likesCount } />
});


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
