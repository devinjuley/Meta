import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getMainFeed, createPostThunk } from '../../store/mainFeed';
import CreatePostModal from '../CreatePost';
import PostComponent from '../MainFeed/PostComponent';
import { sessionFriendsThunk } from '../../store/friends';

import './ProfilePage.css'


function ProfilePage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user)
    const sessionUserFriends = useSelector(state => state?.sessionUserFriends)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const posts = useSelector(state => state?.mainFeed?.friendsPosts)
    const user = useSelector(state => state?.mainFeed?.user)
    const [isLoaded, setIsLoaded] = useState(false)
    // const [showAddFriend, setShowAddFriend] = useState(false)
    const [textContent, setTextContent] = useState('')
    const [errors, setErrors] = useState([]);

    const friendsArr = Object.assign([], friends)
    const sessionUserFriendsArr = Object.assign([], sessionUserFriends)

    let friendsCount = 0
    friendsArr.forEach(friend => friendsCount += 1)

    useEffect(async () => {
        await dispatch(getMainFeed(id))
        await dispatch(sessionFriendsThunk(sessionUser.id))
        if (!isLoaded) setIsLoaded(true);
    }, [dispatch])

    const sessionUserFriendsIds = []
    sessionUserFriendsArr.forEach(friend => {
        sessionUserFriendsIds.push(friend?.friendId)
    })


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
    const postArr = []
    const images = []
    for (let key in posts) {
        if (posts[key].userId === sessionUser.id) {
            postArr.push(posts[key])
            if (posts[key].imageUrl != null) {
                images.push(posts[key].imageUrl)
            }
        }
    }
    const reversedPosts = postArr.reverse()

    const handleAddFriend = () => {
        const request = {
            sessionUserId: sessionUser.id,
            friendId: id
        }

    }




    let button = null;
    if (sessionUser.id === Number(id)) {
        button = null
    } else if (Number(id) in sessionUserFriends) {
        button = (
            <div className='div-around-add-friend-button'>
                <button className='friends-button-profile'>Friends</button>
            </div>
        )
    } else if (!(Number(id) in sessionUserFriends)) {
        button = (
            <div className='div-around-add-friend-button'>
                <button className='add-friend-button' onClick={handleAddFriend}>Add Friend</button>
            </div>
        )
    };

    return (
        <>
            {isLoaded && (<div className='profile-page-parent-div'>
                <div className='top-half-of-profile-page'>
                    <div className='div-around-background-image-profile'>
                        <img src={user?.backgroundImageUrl} className='background-profile-image' alt='' />
                    </div>
                    <div className='div-to-center-section-under-background'>
                        <div className='section-under-background-image-profile'>
                            <div className='div-around-profile-image'>
                                <img src={user?.profileImageUrl} className='profile-image-on-profile-page' alt='' />
                            </div>
                            <div className='centering-div-around-name-friends'>
                                <div className='profile-name-and-number-of-friends'>
                                    <div className='profile-page-first-last-name'>{`${user?.firstName} ${user?.lastName}`}</div>
                                    <div className='profile-number-of-friends'>{`${friendsCount} friends`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='centering-div-around-friend-button'>
                        {button}
                    </div>
                    <div className='section-inbetween-top-and-bottom'>
                        <div className='profile-menu-bar'>
                            <div className='timeline-link-menu'>Timeline</div>
                            <div className='friends-link-menu'>Friends</div>
                            <div className='photos-link-menu'>Photos</div>
                        </div>
                    </div>
                </div>
                <div className='bottom-half-of-profile-page'>
                    <div className='inner-centering-div-for-profile-page'>
                        <div className='left-side-of-profile-page'>
                            <div className='profile-intro'>
                                <div className='profile-titles-of-sections'>Intro</div>
                                <div>{`Works at ${user?.workplace}`}</div>
                                <div>{`Lives in ${user?.city}, ${user?.state}`}</div>
                                <div>{`From ${user?.birthCity}, ${user?.birthState}`}</div>
                            </div>
                            <div className='profile-photos-list'>
                                <div className='profile-titles-of-sections'>Photos</div>
                                <div>
                                    {images?.map(imageUrl => (
                                        <img src={imageUrl} className='profile-photo-image-url' alt='' key={imageUrl} />
                                    ))}
                                </div>
                            </div>
                            <div className='profile-friends-list'>
                                <div className='profile-titles-of-sections'>Friends</div>
                                <div className='profile-number-of-friends'>{`${friendsCount} friends`}</div>
                                <div className='all-friends-links'>
                                    {friendsArr?.map(friend => (
                                        <div className='single-friend-link-profile-page' key={friend.id}>
                                            <img src={friend?.User?.profileImageUrl} className='profile-page-friend-image' alt='' />
                                            <div className='friends-firstname-lastname-profile'>
                                                {`${friend?.User?.firstName} ${friend?.User?.lastName}`}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='posts-megaparent-div-profile-page'>
                            <div className='create-a-post-div'>
                                <div className='inner-create-post-div'>
                                    <img src={sessionUser?.profileImageUrl} className='create-post-image-mainfeed' alt='' />
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
                                        <img src='https://media.discordapp.net/attachments/921246913167245363/921246938127560704/unknown.png' className='create-a-post-icons' alt='' />
                                        Post
                                    </button>
                                    <CreatePostModal />
                                    <button className='feeling-button-mainfeed'>
                                        <img src='https://media.discordapp.net/attachments/921246913167245363/921635080445780018/unknown.png' className='create-a-post-icons' alt='' />
                                        Feeling</button>
                                </div>
                            </div>
                            {reversedPosts?.map(post => (
                                <PostComponent post={post} key={post.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default ProfilePage;