import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {

  let dialogs = [
    {id: 1, name: 'Dymich'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Victor'}];

  let messages = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'Wassap dude'},
    {id: 3, message: 'Hello dear friend'},
    {id: 4, message: 'YO YO YO'}
  ];
  
let dialogsElements = dialogs.map( (dialog) => {
  return <DialogItem name={ dialog.name } id={ dialog.id }/>
});
  let messageElements = messages.map((message) => {
  return <Message message={ message.message } />
});

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        { dialogsElements }

      </div>
      <div className={s.messages}>

        { messageElements }

      </div>
    </div>
  )
}

export default Dialogs
