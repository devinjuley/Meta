import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostThunk } from '../../store/friendsAndPosts';


import { getMainFeed } from '../../store/friendsAndPosts';


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





    const handleSubmit = async (e) => {
        e.preventDefault();

        const comment = {
            userId: sessionUser?.id,
            postId: post.id,
            content: textContent
        }
            // let newPost = await dispatch(createPostThunk(post))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // if (newPost) {
        //     await dispatch(getMainFeed(sessionUser?.id))

        // }


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
                        {post?.Comments?.map(comment => (
                            <div key={comment.id} className='single-comment-parent-div'>
                                <div className='name-and-comment-parent-div-mainfeed'>
                                    <img src={comment?.User?.profileImageUrl} className='comment-profile-image-mainfeed' />
                                    <div className='comment-chat-bubble'><div>{`${comment?.User?.firstName} ${comment?.User?.lastName}`}</div><div>{comment?.content}</div></div>
                                </div>
                            </div>))}
                    </div>
                </div>
            )}
        </>
    );
};

export default CommentComponent;
