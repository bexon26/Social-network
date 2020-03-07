import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs
    .map( d => <DialogsItems name={d.name} id={d.id} />);

    let messagesElements = props.state.messages
    .map( m => <Message message={m.message} id={m.id}/> )
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>




    )
}

export default Dialogs;