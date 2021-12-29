
import { useDispatch, useSelector } from 'react-redux';
import { acceptRequestThunk, removeFriendRequestThunk } from '../../store/mainFeed';



const FriendRequestsSecondary = ({ request }) => {
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
    const handleDenyFriend = () => {
        dispatch(removeFriendRequestThunk(request.id))
    }



    return (
        <div className='single-friend-parent-div'>
            <img src={request?.User?.profileImageUrl} className='friend-image-on-friends-page' alt='' />
            <div className='name-friend-page'>{`${request?.User?.firstName} ${request?.User?.lastName}`}</div>
            <button className='friend-request-accept-button-friendspage' onClick={handleConfirmFriend}>Confirm</button>
            <button className='friend-request-deny-button-friendspage' onClick={handleDenyFriend}>Delete</button>
        </div>
    );
};

export default FriendRequestsSecondary;
