import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
// let state = props.store.getState().profilePage;

// let addPost = () => {
//   props.store.dispatch(addPostActionCreator());
// }

// let onPostChange = (text) => {
//   let action = updateNewPostTextActionCreator(text);
//   props.store.dispatch(action);
// }

//   return (
//     <MyPosts updateNewPostText = {onPostChange} addPost = {addPost} 
//              posts = {state.posts}
//              newPostText = {state.newPostText}/>)
// }


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
