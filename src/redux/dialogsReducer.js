const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  
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
      {id: 4, message: 'YO YO YO'},
  ],
  newMessageText: '',
  
  };


const dialogsReducer = (state = ...initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageText = action.newMessage;
            return state;
        default: 
            return state;
    }
}
export const sendMessageCreator = () => {
    return {
      type: 'SEND-MESSAGE',
    }
  }
  export const updateNewMessageBodyCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessage: text,
  })
  
export default dialogsReducer;