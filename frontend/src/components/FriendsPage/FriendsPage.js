import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMainFeed } from '../../store/mainFeed';
import FriendRequests from '../MainFeed/FriendRequests';
import { getAllUsersThunk } from '../../store/allusers';

import FriendButtons from './FriendButtons';
import './FriendsPage.css'

function FriendsPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const friendRequests = useSelector(state => state?.mainFeed?.friendRequests)
    const allUsers = useSelector(state => state?.allUsers)
    const [isLoaded, setIsLoaded] = useState(false)
    const [showFriends, setShowFriends] = useState(true)
    const [showPYMK, setShowPYMK] = useState(false)
    const [showRequests, setShowRequests] = useState(false)

    const friendsArr = Object.assign([], friends)
    const requestArr = Object.assign([], friendRequests)
    const allUsersArr = Object.assign([], allUsers)
    let friendIds;
    if (friends) {
        friendIds = Object.keys(friends)
    }
    const friendsNumbers = []
    friendIds?.forEach(id => (
        friendsNumbers.push(Number(id))
    ))
    const nonFriendUsers = []
    allUsersArr.forEach(user => {
        if (!friendsNumbers.includes(user.id) && sessionUser.id !== user.id) {
            nonFriendUsers.push(user)
        }
    })
    console.log('===========>>>>', friendIds, allUsers, nonFriendUsers)


    useEffect(async () => {
        await dispatch(getMainFeed(sessionUser?.id))
        await dispatch(getAllUsersThunk())
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
                <div className='single-friend-parent-div' key={friend.friendId}>
                    <img src={friend?.User?.profileImageUrl} className='friend-image-on-friends-page' />
                    <div className='name-friend-page'>{`${friend?.User?.firstName} ${friend?.User?.lastName}`}</div>
                    <a href={`/profile/${friend.friendId}`} className='remove-friend-button'>View Profile</a>
                </div>
            ))
        )
    } else if (showPYMK === true) {
        content = (
            nonFriendUsers?.map(friend => (
                <div className='single-friend-parent-div' key={friend.id}>
                    <img src={friend?.profileImageUrl} className='friend-image-on-friends-page' />
                    <div className='name-friend-page'>{`${friend?.firstName} ${friend?.lastName}`}</div>
                    <FriendButtons friend={friend} />
                </div>
            ))


        )
    } else if (showRequests === true) {
        content = (
            <div>
                {requestArr?.map(request => (
                    <FriendRequests request={request} key={request.id} />
                ))}
            </div>
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