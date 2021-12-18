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
                <button className='post-comment-button-mainfeed' onClick={(() => setShowComments(true))}>Comment</button>
            </div>
            {showComments && (post?.Comments?.map(comment => (
                <div key={comment.id}>
                    <div className='name-and-comment-parent-div-mainfeed'>
                        <img src={comment?.User?.profileImageUrl} className='comment-profile-image-mainfeed' />
                        <div className='comment-chat-bubble'><div>{`${comment?.User?.firstName} ${comment?.User?.lastName}`}</div><div>{comment?.content}</div></div>
                    </div>
                </div>
            )))}
        </>
    );
};

export default CommentComponent;
