import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogsItems name={d.name} id={d.id} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
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
                        <textarea ref={newMessageElement} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="">
                        <button onClick={addMessage} >Add Message</button>
                    </div>
                </div>
            </div>



        </div>




    )
}

export default Dialogs;