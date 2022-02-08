import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMainFeed } from '../../store/mainFeed';
import { sessionFriendsThunk } from '../../store/friends';
import { createPostThunk } from '../../store/mainFeed';
import Picker from 'emoji-picker-react';

import CreatePostModal from '../CreatePost';
import PostComponent from './PostComponent';
import FriendRequests from './FriendRequests';

import './MainFeed.css'



function MainFeed() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const friendsPosts = useSelector(state => state?.mainFeed?.friendsPosts)
    const friendRequests = useSelector(state => state?.mainFeed?.friendRequests)

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [showPicker, setShowPicker] = useState(false)
    let [textContent, setTextContent] = useState('')

    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(async () => {
        await dispatch(getMainFeed(sessionUser?.id))
        await dispatch(sessionFriendsThunk((sessionUser?.id)))
        setIsLoaded(true)
    }, [dispatch, sessionUser.id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (textContent !== '') {
            const post = {
                userId: sessionUser?.id,
                content: textContent,
                imageUrl: null
            }

            let newPost = await dispatch(createPostThunk(post))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
            if (newPost) {
                setTextContent('')
                setChosenEmoji(null)
            }
        }
    }

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    const postPlaceholder = `What's on your mind, ${sessionUser.firstName}?`
    const friendsArr = Object.assign([], friends)
    const postArr = Object.assign([], friendsPosts)
    const requestArr = Object.assign([], friendRequests)

    const reversedPosts = postArr.reverse()

    const handleEmoji = () => {
        setShowPicker(true)
    }
    const emojiArr = []
    return (
        <>
            {isLoaded && (<div className='main-feed-parent-div'>
                <div className='left-menu-mainfeed'>
                    <div className='left-menu-sticky'>
                        <NavLink to={`/profile/${sessionUser.id}`} className='user-fullname-and-pic-mainfeed'>
                            <img src={sessionUser?.profileImageUrl} className='mainfeed-profile-image' alt='' />
                            <div>{sessionUser?.firstName} {sessionUser?.lastName}</div>
                        </NavLink>
                        <NavLink to='/friends' className='friends-parent-mainfeed'>
                            <img src='https://media.discordapp.net/attachments/921246913167245363/921662235435225138/unknown.png' className='friends-icon-mainfeed' alt='' />
                            <div>Friends</div>
                        </NavLink>
                        <div className='friend-request-section'>Friend Requests</div>
                        {requestArr?.map(request => (
                            <FriendRequests request={request} key={request.id} />
                        ))}
                    </div>
                </div>
                <div className='posts-megaparent-div-mainfeed'>
                    <div className='create-a-post-div'>
                        <div className='inner-create-post-div'>
                            <img src={sessionUser?.profileImageUrl} className='create-post-image-mainfeed' alt='' />
                            <form onSubmit={handleSubmit} className='create-a-post-form-mainfeed' id='create-post-submit-mainfeed'>
                                {/* {!chosenEmoji && (<input
                                    type='text'
                                    value={textContent}
                                    onChange={(e) => setTextContent(e.target.value)}
                                    placeholder={postPlaceholder}
                                    className='post-text-content-input'
                                    id='emojs-for-text-box'
                                />)} */}
                                <input
                                    type='text'
                                    value={textContent}
                                    onChange={(e) => setTextContent(e.target.value)}
                                    placeholder={postPlaceholder}
                                    className='post-text-content-input'
                                    id='emojs-for-text-box'
                                />
                            </form>
                        </div>
                        <div className='create-post-buttons-div'>
                            <button className='post-button-mainfeed' form='create-post-submit-mainfeed' type='submit'>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/921246938127560704/unknown.png' className='create-a-post-icons' alt='' />
                                Post
                            </button>
                            <CreatePostModal />
                            <button className='feeling-button-mainfeed' onClick={handleEmoji} input='emojs-for-text-box'>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/921635080445780018/unknown.png' className='create-a-post-icons' alt='' />
                                Feeling</button>
                            <div className='emoji-picker-css'>
                                {showPicker && (<Picker onEmojiClick={onEmojiClick} />)}
                            </div>
                        </div>
                    </div>
                    {reversedPosts?.map(post => (
                        <PostComponent post={post} key={post.id} />
                    ))}
                </div>
                <div className='right-menu-mainfeed'>
                    <div className='right-menu-sticky'>
                        <div className='sponsored-section'>Sponsored</div>
                        <div >
                            <a href='https://www.appacademy.io/' className='aa-link-div'>
                                <img src='https://media.discordapp.net/attachments/921180280482590730/921180302561398864/5faae1191b673c881b077e1f_ogaa-min.png' className='sponsored-pic-mainfeed' alt='' />
                            </a>
                        </div>
                        <div className='contacts-label-mainfeed'>Contacts</div>
                        {friendsArr?.map(friend => (
                            <NavLink to={`/profile/${friend?.User?.id}`} key={friend.id} className='contacts-name-profilepic'>
                                <img src={friend?.User?.profileImageUrl} className='mainfeed-profile-image' alt='' />
                                <div>{`${friend?.User?.firstName} ${friend?.User?.lastName}`}</div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default MainFeed;