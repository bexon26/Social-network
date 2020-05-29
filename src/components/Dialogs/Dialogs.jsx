import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';
//import { reduxForm, Field } from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogsItems name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}



export default Dialogs;