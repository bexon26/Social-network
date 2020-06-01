import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                validate={[required, maxLength50]}
                name="newMessageBody" placeholder='Enter your message'/>               
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm ({form: "dialog-add-message-form"})(AddMessageForm)