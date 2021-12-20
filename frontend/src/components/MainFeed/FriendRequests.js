import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainFeed.css'


const FriendRequests = ({ request }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)


    const handleAccept = (e) => {
        e.preventDefault()



    }
    const handleDeny = (e) => {
        e.preventDefault()
    }



    return (
        <div>

            <div className='div-around-friend-request'>
                <img src={request?.User?.profileImageUrl} className='friend-request-user-pic' />
                <div>
                    <div className='friend-request-name-and-phrase'>
                        <div className='friend-request-first-last-name'>{`${request?.User?.firstName} ${request?.User?.lastName} `}<span className='friend-request-phrase'>sent you a friend request.</span></div>

                    </div>
                    <div className='confirm-delete-buttons-friend-request'>
                        <button className='friend-request-accept-button'>Confirm</button>
                        <button className='friend-request-deny-button'>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendRequests;
