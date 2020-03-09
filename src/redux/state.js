let rerenderEntireTree = () => {
  console.log('State has been changed');
}

let state = {
    profilePage: {
      posts: [
        {id: 1, postText: 'Hi, how are you?', likesCount: 3},
        {id: 2, postText: 'This is my first post', likesCount: 23},
        {id: 3, postText: 'Wasssap', likesCount: 13}
    ],
    newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dymich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'}
    ],
    
      messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Wassap dude'},
        {id: 3, message: 'Hello dear friend'},
        {id: 4, message: 'YO YO YO'}
    ]
    },
    sidebar: [
      {id: 1, name: 'Dymich'},
      {id: 2, name: 'Sveta'},
      {id: 3, name: 'Sasha'}
    ]
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    postText: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe  = (observer) => {
  rerenderEntireTree = observer;
  
}

export default state;