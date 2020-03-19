import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let dialogsElements = 
    props.dialogsPage.dialogs.map( (dialog) => {
  return <DialogItem name={ dialog.name } id={ dialog.id }/>
  });
  let messageElements = 
      props.dialogsPage.messages.map((message) => {
  return <Message message={ message.message } dispatch = {props.dispatch} />
  });

  let sendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text)
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messageElements }
      <div>
      <div>
        <textarea ref={newMessageElement} placeholder='Enter your message' value = {props.newMessageText} onChange={onMessageChange}></textarea>
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
