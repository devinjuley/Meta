
import { useDispatch, useSelector } from 'react-redux';
import { friendRequestThunk } from '../../store/mainFeed';




const FriendButtons = ({ friend }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)


    const handleAddFriend = () => {
        const request = {
            sessionUserId: friend.id,
            friendId: sessionUser.id
        }
        dispatch(friendRequestThunk(request))
    }







    return (
        <a href={`/profile/${friend.id}`} className='add-friend-button-friendspage'>View Profile</a>
    );
};

export default FriendButtons;
