import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMainFeed } from '../../store/mainFeed';
import FriendRequests from '../MainFeed/FriendRequests';
import './FriendsPage.css'

function FriendsPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const friendRequests = useSelector(state => state?.mainFeed?.friendRequests)
    const [isLoaded, setIsLoaded] = useState(false)
    const [showFriends, setShowFriends] = useState(true)
    const [showPYMK, setShowPYMK] = useState(false)
    const [showRequests, setShowRequests] = useState(false)

    const friendsArr = Object.assign([], friends)
    const requestArr = Object.assign([], friendRequests)

    useEffect(async () => {
        await dispatch(getMainFeed(sessionUser?.id))
        setIsLoaded(true)
    }, [dispatch, sessionUser.id])

    const handleFriends = () => {
        setShowFriends(true)
        setShowPYMK(false)
        setShowRequests(false)
    }
    const handlePYMK = () => {
        setShowPYMK(true)
        setShowFriends(false)
        setShowRequests(false)
    }
    const handleRequests = () => {
        setShowRequests(true)
        setShowPYMK(false)
        setShowFriends(false)
    }

    let content;
    if (showFriends === true) {
        content = (
            friendsArr?.map(friend => (
                <div className='single-friend-parent-div'>
                    <img src={friend?.User?.profileImageUrl} className='friend-image-on-friends-page' />
                    <div className='name-friend-page'>{`${friend?.User?.firstName} ${friend?.User?.lastName}`}</div>
                    <button className='remove-friend-button'>Remove Friend</button>
                </div>
            ))
        )
    } else if (showPYMK === true) {
        content = (
            <div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </div>


        )
    } else if (showRequests === true) {
        content = (
            requestArr?.map(request => (
                <FriendRequests request={request} key={request.id} />
            ))
        )
    }


    return (
        <>
            {isLoaded && (<div className='friends-page-parent-div'>
                <div className='left-side-of-friends-page'>
                    <div className='friends-title-friends-page'>Friends</div>
                    <div className='your-friends-div' onClick={handleFriends}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/925499360744185866/unknown.png' className='friends-page-icon-1' />
                        Your Friends</div>
                    <div className='people-you-may-know-div' onClick={handlePYMK}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/925499157043617822/unknown.png' className='friends-page-icon-2' />
                        People You May Know</div>
                    <div className='friend-requests-div-friendspage' onClick={handleRequests}>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/925498740641501234/unknown.png' className='friends-page-icon-3' />
                        Friend Requests</div>

                </div>
                <div className='right-side-of-friends-page'>
                    {content}
                </div>

            </div>)}
        </>
    )
}

export default FriendsPage;