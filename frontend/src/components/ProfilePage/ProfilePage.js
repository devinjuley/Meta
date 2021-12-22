import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getMainFeed, createPostThunk } from '../../store/mainFeed';
import CreatePostModal from '../CreatePost';
import PostComponent from '../MainFeed/PostComponent';

import './ProfilePage.css'


function ProfilePage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const posts = useSelector(state => state?.mainFeed?.friendsPosts)
    const [isLoaded, setIsLoaded] = useState(false)

    const friendsArr = Object.assign([], friends)
    let friendsCount = 0
    friendsArr.forEach(friend => friendsCount += 1)

    const [textContent, setTextContent] = useState('')
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getMainFeed(id))
        setIsLoaded(true)
    }, [dispatch])

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
    for (let key in posts) {
        if (posts[key].userId == sessionUser.id) {
            postArr.push(posts[key])
        }
    }
    const reversedPosts = postArr.reverse()








    return (
        <>
            {isLoaded && (<div className='profile-page-parent-div'>
                <div className='top-half-of-profile-page'>
                    <div className='div-around-background-image-profile'>
                        <img src={sessionUser.backgroundImageUrl} className='background-profile-image' />
                    </div>
                    <div className='div-to-center-section-under-background'>
                        <div className='section-under-background-image-profile'>
                            <div className='div-around-profile-image'>
                                <img src={sessionUser.profileImageUrl} className='profile-image-on-profile-page' />
                            </div>
                            <div className='centering-div-around-name-friends'>
                                <div className='profile-name-and-number-of-friends'>
                                    <div className='profile-page-first-last-name'>{`${sessionUser.firstName} ${sessionUser.lastName}`}</div>
                                    <div className='profile-number-of-friends'>{`${friendsCount} friends`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-half-of-profile-page'>
                    <div className='inner-centering-div-for-profile-page'>
                        <div className='left-side-of-profile-page'>
                            test test test
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
                                    <CreatePostModal />
                                    <button className='feeling-button-mainfeed'>
                                        <img src='https://media.discordapp.net/attachments/921246913167245363/921635080445780018/unknown.png' className='create-a-post-icons' />
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