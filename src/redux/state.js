
let store = {
  _state: {
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
},
_rerenderEntireTree() {
  console.log('State has been changed');
},
subscribe(observer) {
  this._rerenderEntireTree = observer;
  
},
getState() {
  return this._state;
},

dispatch(action) {
  if(action.type === 'ADD-POST') {
    let newPost = {
      id: 5,
      postText: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostText = action.newText;
    this._rerenderEntireTree(this._state);
  }
},
}

window.state = store;

export default store;