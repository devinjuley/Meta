import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRequestThunk, removeFriendRequestThunk } from '../../store/mainFeed';
import './MainFeed.css'


const FriendRequests = ({ request }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)


    const handleConfirmFriend = () => {
        const friend = {
            sessionUserId: request?.sessionUserId,
            friendId: request?.friendId
        }
        dispatch(acceptRequestThunk(friend))
        dispatch(removeFriendRequestThunk(request.id))
    }
    const handleDeny = (e) => {
        e.preventDefault()
    }



    return (
        <div>

            <div className='div-around-friend-request'>
                <div>
                    <img src={request?.User?.profileImageUrl} className='friend-request-user-pic' />
                </div>
                <div className='div-around-name-and-buttons-friend-request'>
                    <div className='friend-request-name-and-phrase'>
                        <div className='friend-request-first-last-name'>{`${request?.User?.firstName} ${request?.User?.lastName} `}<span className='friend-request-phrase'>sent you a friend request.</span></div>

                    </div>
                    <div className='confirm-delete-buttons-friend-request'>
                        <button className='friend-request-accept-button' onClick={handleConfirmFriend}>Confirm</button>
                        <button className='friend-request-deny-button'>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendRequests;
