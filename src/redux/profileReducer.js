const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, postText: 'Hi, how are you?', likesCount: 3 },
    { id: 2, postText: 'This is my first post', likesCount: 23 },
    { id: 3, postText: 'Wasssap', likesCount: 13 }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        postText: state.newPostText,
        likesCount: 0
      }
      return { 
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
       }
      // stateCopy.posts = [...state.posts]
      // stateCopy.posts.push(newPost)
      // stateCopy.newPostText = ''
      //return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      return { 
        ...state,
        newPostText: action.newText
       };
      //stateCopy.newPostText = action.newText
      //return stateCopy
    }
    default:
      return state
  }
}
export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}
export const updateNewPostTextActionCreator = text => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}
export default profileReducer
