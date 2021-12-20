import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostThunk, editPostThunk } from '../../store/friendsAndPosts';
import EditDeleteButton from './EditDeleteButton';
import CommentComponent from '../Comments/CommentComponent';
import { format } from "date-fns";
import './MainFeed.css'

const PostComponent = ({ post }) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector(state => state?.session?.user)
    const [showEditBox, setShowEditBox] = useState(false)
    const [textContent, setTextContent] = useState(post?.content)

    const handleEditSubmission = (e) => {
        e.preventDefault()
        const editedPost = {
            id: post.id,
            userId: sessionUser.id,
            content: textContent
        }

        dispatch(editPostThunk(editedPost))
        setShowEditBox(false)
    }



    return (
        <div key={post?.id} className='friends-posts-parent-mainfeed'>
            <div className='center-name-image-editbutton'>
                <div className='post-name-and-image-mainfeed'>
                    <img src={post?.User?.profileImageUrl} className='post-profile-image-mainfeed' />
                    <div className='name-and-date-mainfeed'>
                        <div className='post-first-last-name-mainfeed'>{`${post?.User?.firstName} ${post?.User?.lastName}`}</div>
                        <div className='date-of-post'>{format(new Date(post?.createdAt), "MMM D, YYYY, hh:mm A")}</div>
                    </div>
                    <div className='edit-delete-menu'>
                        {sessionUser.id == post?.userId && (<EditDeleteButton post={post} showEditBox={showEditBox} setShowEditBox={setShowEditBox} />)}
                    </div>
                </div>
            </div>
            <div className='center-post-text-content-div'>
                {!showEditBox && (<div className='post-text-content-mainfeed'>{post?.content}</div>)}
                {showEditBox && (
                    <form onSubmit={handleEditSubmission} className='edit-post-form'>
                        <input
                            type='text'
                            value={textContent}
                            onChange={(e) => setTextContent(e.target.value)}
                            className='edit-post-input-box'
                        />
                    </form>
                )}
            </div>
            {post?.imageUrl !== null && (<img src={post?.imageUrl} className='post-image-content-mainfeed' />)}
            <CommentComponent post={post} />
        </div>
    );
};

export default PostComponent;
