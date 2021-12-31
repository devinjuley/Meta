import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMainFeed, createPostThunk, friendRequestThunk, removeFriendRequestThunk, removeFriendThunk } from '../../store/mainFeed';
import CreatePostModal from '../CreatePost';
import PostComponent from '../MainFeed/PostComponent';
import { sessionFriendsThunk } from '../../store/friends';

import './ProfilePage.css'


function ProfilePage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user)
    // const sessionUserFriends = useSelector(state => state?.sessionUserFriends)
    const friendRequests = useSelector(state => state?.mainFeed?.friendRequests)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const posts = useSelector(state => state?.mainFeed?.friendsPosts)
    const user = useSelector(state => state?.mainFeed?.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const [textContent, setTextContent] = useState('')
    const [errors, setErrors] = useState([]);
    const [showTimeline, setShowTimeline] = useState(true)
    const [showPhotos, setShowPhotos] = useState(false)
    const [showFriends, setShowFriends] = useState(false)

    const friendsArr = Object.assign([], friends)

    let friendsCount = 0
    friendsArr.forEach(friend => friendsCount += 1)

    useEffect(async () => {
        await dispatch(getMainFeed(id))
        await dispatch(sessionFriendsThunk(sessionUser.id))
        if (!isLoaded) setIsLoaded(true);
    }, [dispatch, id, sessionUser.id])

    const handleTimeline = () => {
        setShowTimeline(true)
        setShowFriends(false)
        setShowPhotos(false)
    }
    const handlePhotos = () => {
        setShowPhotos(true)
        setShowFriends(false)
        setShowTimeline(false)
    }
    const handleFriends = () => {
        setShowFriends(true)
        setShowPhotos(false)
        setShowTimeline(false)
    }

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
        if (posts[key].userId === Number(id)) {
            postArr.push(posts[key])
            if (posts[key].imageUrl != null) {
                images.push(posts[key].imageUrl)
            }
        }
    }
    const reversedPosts = postArr.reverse()

    const handleAddFriend = () => {
        const request = {
            sessionUserId: id,
            friendId: sessionUser.id
        }
        dispatch(friendRequestThunk(request))
    }

    const handleCancelRequest = () => {
        const requestId = friendRequests[sessionUser.id].id
        dispatch(removeFriendRequestThunk(requestId))
    }

    const handleRemoveFriend = () => {
        dispatch(removeFriendThunk(sessionUser.id, id))
    }


    let button = null;
    if (friendRequests) {
        if (sessionUser.id === Number(id)) {
            button = null
        } else if (sessionUser.id in friends) {
            button = (
                <div className='div-around-add-friend-button'>
                    <button className='friends-button-profile' onClick={handleRemoveFriend}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/925615457417973770/unknown.png' className='friends-icon-profilepage' alt='' />
                        Friends</button>
                </div>
            )
        } else if (!(sessionUser.id in friends) && !(sessionUser.id in friendRequests)) {
            button = (
                <div className='div-around-add-friend-button'>
                    <button className='add-friend-button' onClick={handleAddFriend}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/925608635650953286/unknown.png' className='add-friend-icon' alt='' />
                        Add Friend</button>
                </div>
            )
        } else if (sessionUser.id in friendRequests) {
            button = (
                <div className='div-around-add-friend-button'>
                    <button className='add-friend-button' onClick={handleCancelRequest}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/925609578375290960/unknown.png' className='cancel-request-icon' alt='' />
                        Cancel Request</button>
                </div>
            )
        }
    }

    let profileContent;
    if (showTimeline === true) {
        profileContent = (

            <div className='inner-centering-div-for-profile-page'>
                <div className='left-side-of-profile-page'>
                    <div className='profile-intro'>
                        <div className='profile-titles-of-sections'>Intro</div>
                        <div className='intro-inner-divs'>
                            <img src='https://media.discordapp.net/attachments/921246913167245363/924462045120843786/unknown.png' className='intro-icons' alt='' />
                            Works at <span className='intro-spans'>{user?.workplace}</span></div>
                        <div className='intro-inner-divs'>
                            <img src='https://media.discordapp.net/attachments/921246913167245363/924466076576804894/unknown.png' className='intro-icons' alt='' />
                            Lives in <span className='intro-spans'>{user?.city}, {user?.state}</span></div>
                        <div className='intro-inner-divs'>
                            <img src='https://media.discordapp.net/attachments/921246913167245363/924463955525632081/unknown.png' className='intro-icons' alt='' />
                            From <span className='intro-spans'>{user?.birthCity}, {user?.birthState}</span></div>
                    </div>
                    <div className='profile-photos-list'>
                        <div className='profile-titles-of-sections'>Photos</div>
                        <div className='all-pictures-profile-page'>
                            {images?.map(imageUrl => (
                                <div className='div-around-image-on-profile-page' key={imageUrl}>
                                    <img src={imageUrl} className='profile-photo-image-url' alt='' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='profile-friends-list'>
                        <div className='profile-titles-of-sections-friends'>Friends</div>
                        <div className='profile-number-of-friends-below'>{`${friendsCount} friends`}</div>
                        <div className='all-friends-links'>
                            {friendsArr?.map(friend => (
                                <a href={`/profile/${friend?.friendId}`} className='single-friend-link-profile-page' key={friend.id}>
                                    <img src={friend?.User?.profileImageUrl} className='profile-page-friend-image' alt='' />
                                    <div className='friends-firstname-lastname-profile'>
                                        {`${friend?.User?.firstName} ${friend?.User?.lastName}`}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='posts-megaparent-div-profile-page'>
                    {(sessionUser.id == id) && (<div className='create-a-post-div'>
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
                    </div>)}
                    {reversedPosts?.map(post => (
                        <PostComponent post={post} key={post.id} />
                    ))}
                </div>
            </div>

        )
    } else if (showPhotos === true) {
        profileContent = (
            <div className='profile-photos-list'>
                <div className='profile-titles-of-sections'>Photos</div>
                <div className='all-pictures-profile-page'>
                    {images?.map(imageUrl => (
                        <div className='div-around-image-on-profile-page' key={imageUrl}>
                            <img src={imageUrl} className='profile-photo-image-url' alt='' />
                        </div>
                    ))}
                </div>
            </div>
        )
    } else if (showFriends === true) {
        profileContent = (
            <div className='profile-friends-list'>
                <div className='profile-titles-of-sections-friends'>Friends</div>
                <div className='profile-number-of-friends-below'>{`${friendsCount} friends`}</div>
                <div className='all-friends-links'>
                    {friendsArr?.map(friend => (
                        <a href={`/profile/${friend?.friendId}`} className='single-friend-link-profile-page' key={friend.id}>
                            <img src={friend?.User?.profileImageUrl} className='profile-page-friend-image' alt='' />
                            <div className='friends-firstname-lastname-profile'>
                                {`${friend?.User?.firstName} ${friend?.User?.lastName}`}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )
    }

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
                            <div className='timeline-link-menu' onClick={handleTimeline}>Timeline</div>
                            <div className='friends-link-menu' onClick={handleFriends}>Friends</div>
                            <div className='photos-link-menu' onClick={handlePhotos}>Photos</div>
                        </div>
                    </div>
                </div>
                <div className='bottom-half-of-profile-page'>
                    {profileContent}
                </div>
            </div>)}
        </>
    )
}

export default ProfilePage;