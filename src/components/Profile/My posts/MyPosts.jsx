import React, { PureComponent } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../../components/common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field name="newPostText" component={Textarea} placeholder="Post message"
                    validate={[required, maxLength10]} />
            </div>
            <div className="">
                <button>Add post</button>
            </div>
        </form>
    )
}


let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)
const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} like={p.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = values => {
        props.addPost(values.newPostText);
    };

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className='posts'>
            {postsElements}
        </div>
    </div>;
});




export default MyPosts;