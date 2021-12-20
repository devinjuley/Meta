import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createPostThunk } from '../../store/mainFeed';
import { createCommentThunk } from '../../store/mainFeed';
import { format } from "date-fns";

// import { getMainFeed } from '../../store/mainFeed';


// thunk import
// import { signUp } from '../../store/session';
import './Comments.css'
// import './SignUpForm.css';

const CommentComponent = ({ post }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)
    const [showComments, setShowComments] = useState(false)
    const [textContent, setTextContent] = useState('');

    const [errors, setErrors] = useState([]);

    const commentsArr = post?.Comments
    const reversedArr = commentsArr.reverse()



    const handleSubmit = async (e) => {
        e.preventDefault();

        const comment = {
            userId: sessionUser?.id,
            postId: post.id,
            content: textContent
        }
        let newComment = await dispatch(createCommentThunk(comment))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        if (newComment) {
            setTextContent('')

        }


    };

    return (
        <>
            <div className='buttons-at-bottom-of-post-mainfeed'>
                <div className='centering-buttons-at-bottom-of-post'>
                    <button className='post-comment-button-mainfeed' onClick={(() => setShowComments(true))}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/921940858847244348/unknown.png' className='comment-button-icon' />
                        Comment</button>
                </div>
            </div>

            {showComments && (
                <div>
                    <div className='create-comment-outer-div'>
                        <div className='inner-create-comment-div'>
                            <img src={sessionUser?.profileImageUrl} className='create-comment-image-mainfeed' />
                            <form onSubmit={handleSubmit} className='create-a-post-form-mainfeed' id='create-post-submit-mainfeed'>
                                <input
                                    type='text'
                                    value={textContent}
                                    onChange={(e) => setTextContent(e.target.value)}
                                    placeholder='Write a comment...'
                                    className='comment-text-content-input'
                                    id='emojs-for-text-box'
                                />
                            </form>
                        </div>
                    </div>
                    <div className='all-comments-parent-div'>
                        {reversedArr.map(comment => (
                            <div key={comment.id} className='single-comment-parent-div'>
                                <div className='name-and-comment-parent-div-mainfeed'>
                                    <img src={comment?.User?.profileImageUrl} className='comment-profile-image-mainfeed' />
                                    <div>
                                        <div className='comment-chat-bubble'>
                                            <div className='comment-text-edit-delete-buttons'>
                                                <div className='firstname-lastname-comment'>
                                                    {`${comment?.User?.firstName} ${comment?.User?.lastName}`}
                                                </div>
                                                <div className='comment-edit-button'>
                                                    <img src='https://media.discordapp.net/attachments/921246913167245363/922208971253751838/unknown.png' className='comment-edit-button-icon' />
                                                    Edit
                                                </div>
                                                <div className='comment-delete-button'>
                                                    <img src='https://media.discordapp.net/attachments/921246913167245363/922209557898465280/unknown.png' className='comment-delete-button-icon' />
                                                    Delete
                                                </div>
                                            </div>
                                            <div className='comment-content-dj'>{comment?.content}</div>
                                        </div>
                                        <div className='edit-delete-time-comment'>

                                            <div className='comment-date'>{format(new Date(comment?.createdAt), "MMM D, YYYY, h:mm A")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>
            )}
        </>
    );
};

export default CommentComponent;
