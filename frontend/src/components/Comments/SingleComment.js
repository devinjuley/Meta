import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createPostThunk } from '../../store/mainFeed';
import { createCommentThunk, editCommentThunk } from '../../store/mainFeed';
import { format } from "date-fns";

// import { getMainFeed } from '../../store/mainFeed';


// thunk import
// import { signUp } from '../../store/session';
import './Comments.css'
// import './SignUpForm.css';

const SingleComment = ({ comment }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)
    const [showEditBox, setShowEditBox] = useState(false)
    const [commentContent, setCommentContent] = useState(comment?.content);

    const [errors, setErrors] = useState([]);


    const handleEditSubmission = (e) => {
        e.preventDefault()
        const editedComment = {
            id: comment.id,
            userId: sessionUser.id,
            postId: comment.postId,
            content: commentContent
        }

        dispatch(editCommentThunk(editedComment))
        setShowEditBox(false)
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const comment = {
    //         userId: sessionUser?.id,
    //         postId: post.id,
    //         content: textContent
    //     }
    //     let newComment = await dispatch(createCommentThunk(comment))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             if (data && data.errors) setErrors(data.errors);
    //         });
    //     if (newComment) {
    //         setTextContent('')

    //     }


    // };

    return (
        <div className='single-comment-parent-div'>
            <div className='name-and-comment-parent-div-mainfeed'>
                <img src={comment?.User?.profileImageUrl} className='comment-profile-image-mainfeed' />
                <div>
                    <div className='comment-chat-bubble'>
                        <div className='comment-text-edit-delete-buttons'>
                            <div className='firstname-lastname-comment'>
                                {`${comment?.User?.firstName} ${comment?.User?.lastName}`}
                            </div>
                            <div className='comment-edit-button' onClick={(() => setShowEditBox(true))}>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/922208971253751838/unknown.png' className='comment-edit-button-icon' />
                                Edit
                            </div>
                            <div className='comment-delete-button'>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/922209557898465280/unknown.png' className='comment-delete-button-icon' />
                                Delete
                            </div>
                        </div>
                        {!showEditBox && (<div className='comment-content-dj'>{comment?.content}</div>)}
                        {showEditBox && (
                            <form onSubmit={handleEditSubmission} className='edit-comment-form'>
                                <input
                                    type='text'
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                    className='edit-comment-input-box'
                                />
                            </form>)}
                    </div>
                    <div className='edit-delete-time-comment'>

                        <div className='comment-date'>{format(new Date(comment?.createdAt), "MMM D, YYYY, h:mm A")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;



