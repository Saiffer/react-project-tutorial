import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;
//   let sendMessage = () => {
//     props.dispatch(sendMessageCreator());
//   }

//   let onMessageChange = (text) => {
    
//     props.dispatch(updateNewMessageBodyCreator(text));
//   }
  

//   return (
//     <Dialogs updateNewMessageText = {onMessageChange}
//              sendMessage = {sendMessage}
//              dialogsPage = {state}/>
//   )
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) =>{
      dispatch(updateNewMessageBodyCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
