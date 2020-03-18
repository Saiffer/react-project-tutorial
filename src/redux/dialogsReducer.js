const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
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