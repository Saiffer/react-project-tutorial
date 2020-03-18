import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageCreator());
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageBodyCreator(text);
    props.dispatch(action);
  }
  
let dialogsElements = 
    props.state.dialogs.map( (dialog) => {
  return <DialogItem name={ dialog.name } id={ dialog.id }/>
});
  let messageElements = 
      props.state.messages.map((message) => {
  return <Message message={ message.message } dispatch = {props.dispatch} />
});

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messageElements }
      <div>
      <div>
        <textarea ref={newMessageElement} placeholder='Enter your message' value = {props.state.newMessageText} onChange={onMessageChange}></textarea>
      </div>
      <div>
      <button onClick={ sendMessage }>Send message</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Dialogs
