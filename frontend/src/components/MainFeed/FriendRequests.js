import { getMainFeed } from '../../store/mainFeed';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRequestThunk, removeFriendRequestThunk } from '../../store/mainFeed';
import './MainFeed.css'


const FriendRequests = ({ request }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.mainFeed?.friends)


    const handleConfirmFriend = () => {
        const friend = {
            sessionUserId: request?.sessionUserId,
            friendId: request?.friendId
        }
        dispatch(acceptRequestThunk(friend))
        dispatch(removeFriendRequestThunk(request.id))
        dispatch(getMainFeed(sessionUser.id))
    }
    const handleDenyFriend = () => {
        dispatch(removeFriendRequestThunk(request.id))
    }

    for (let key in friends) {
        if (key == request.friendId) {
            dispatch(removeFriendRequestThunk(request.id))
        }
    }


    return (
        <div>

            <div className='div-around-friend-request'>
                <div>
                    <img src={request?.User?.profileImageUrl} className='friend-request-user-pic' alt='' />
                </div>
                <div className='div-around-name-and-buttons-friend-request'>
                    <div className='friend-request-name-and-phrase'>
                        <div className='friend-request-first-last-name'>{`${request?.User?.firstName} ${request?.User?.lastName} `}<span className='friend-request-phrase'>sent you a friend request.</span></div>

                    </div>
                    <div className='confirm-delete-buttons-friend-request'>
                        <button className='friend-request-accept-button' onClick={handleConfirmFriend}>Confirm</button>
                        <button className='friend-request-deny-button' onClick={handleDenyFriend}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendRequests;
