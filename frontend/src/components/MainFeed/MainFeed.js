import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getMainFeed } from '../../store/friendsAndPosts';
import { createPostThunk } from '../../store/friendsAndPosts';
import './MainFeed.css'

function MainFeed() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.friends?.friends)
    const friendsPosts = useSelector(state => state?.friends?.friendsPosts)
    const [textContent, setTextContent] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(async () => {
        await dispatch(getMainFeed(sessionUser?.id))
        setIsLoaded(true)
    }, [dispatch, sessionUser.id])

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        }
    }

    const postPlaceholder = `What's on your mind, ${sessionUser.firstName}?`

    const postArr = Object.assign([], friendsPosts)
    const reversedPosts = postArr?.reverse()


    return (
        <>
            {isLoaded && (<div className='main-feed-parent-div'>
                <div className='left-menu-mainfeed'>
                    <div className='left-menu-sticky'>
                        <div className='user-fullname-and-pic-mainfeed'>
                            <img src={sessionUser?.profileImageUrl} className='mainfeed-profile-image' />
                            <div>{sessionUser?.firstName} {sessionUser?.lastName}</div>
                        </div>
                        <NavLink to='/friends' className='friends-parent-mainfeed'>
                            <div className='friends-logo-mainfeed'>frnds</div>
                            <div>Friends</div>
                        </NavLink>
                    </div>
                </div>
                <div className='posts-megaparent-div-mainfeed'>
                    <div className='create-a-post-div'>
                        <div className='inner-create-post-div'>
                            <img src={sessionUser?.profileImageUrl} className='create-post-image-mainfeed' />
                            <form onSubmit={handleSubmit} className='create-a-post-form-mainfeed' id='create-post-submit-mainfeed'>
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
                                <img src='https://media.discordapp.net/attachments/921246913167245363/921246938127560704/unknown.png' className='create-a-post-icons' />
                                Post
                            </button>
                            <button className='photo-button-mainfeed'>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/921248928538693642/unknown.png' className='create-a-post-icons' />
                                Add Photo</button>
                            <button className='feeling-button-mainfeed'>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/921249406072803348/unknown.png' className='create-a-post-icons' />
                                Feeling/activity</button>
                        </div>
                    </div>
                    {reversedPosts?.map(post => (
                        <div key={post?.id} className='friends-posts-parent-mainfeed'>
                            <div className='post-name-and-image-mainfeed'>
                                <img src={post?.User?.profileImageUrl} className='post-profile-image-mainfeed' />
                                <div>{`${post?.User?.firstName} ${post?.User?.lastName}`}</div>
                            </div>
                            <div>
                                <div className='post-text-content-mainfeed'>{post?.content}</div>
                                <img src={post?.imageUrl} className='post-image-content-mainfeed' />
                            </div>
                            <div className='buttons-at-bottom-of-post-mainfeed'>
                                <button className='post-comment-button-mainfeed'>Comment</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='right-menu-mainfeed'>
                    <div className='right-menu-sticky'>
                        <div className='sponsored-section'>Sponsored</div>
                        <div >
                            <a href='https://www.appacademy.io/' className='aa-link-div'>
                                <img src='https://media.discordapp.net/attachments/921180280482590730/921180302561398864/5faae1191b673c881b077e1f_ogaa-min.png' className='sponsored-pic-mainfeed' />
                            </a>
                        </div>
                        <div className='contacts-label-mainfeed'>Contacts</div>
                        {friends?.map(friend => (
                            <div key={friend.id} className='contacts-name-profilepic'>
                                <img src={friend?.User?.profileImageUrl} className='mainfeed-profile-image' />
                                <div>{`${friend?.User?.firstName} ${friend?.User?.lastName}`}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default MainFeed;