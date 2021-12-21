import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createPostThunk } from '../../store/mainFeed';
import { createCommentThunk } from '../../store/mainFeed';
import SingleComment from './SingleComment';
import { format } from "date-fns";

import { getMainFeed } from '../../store/mainFeed';


// thunk import
// import { signUp } from '../../store/session';
import './Comments.css'
// import './SignUpForm.css';

const CommentComponent = ({ comments, post }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)
    const [showComments, setShowComments] = useState(false)
    const [textContent, setTextContent] = useState('');

    const [errors, setErrors] = useState([]);

    const reversedArr = comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    console.log('reversed array', reversedArr)

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
            // dispatch(getMainFeed(sessionUser.id))
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
                        {reversedArr?.map((comment) => (
                            <SingleComment comment={comment} key={comment.id} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default CommentComponent;
