import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogsItems name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessageBody = state.newMessageBody;
    


    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBodyCreator(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className="">
                    <div className="">
                        <textarea   value={newMessageBody} 
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'
                                    name="" id="" cols="30" rows="10" ></textarea>
                    </div>
                    <div className="">
                        <button onClick={onSendMessageClick} >Send</button>
                    </div>
                </div>
            </div>



        </div>




    )
}

export default Dialogs;