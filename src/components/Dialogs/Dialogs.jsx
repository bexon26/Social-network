import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogsItems name={d.name} id={d.id} />);
    let messagesElements = state.messages
        .map(m => <Message message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody;
    


    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
        console.log(props.store)
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
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