import { useState, useEffect } from 'react';
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
        <button className='add-friend-button-friendspage' onClick={handleAddFriend}>Add Friend</button>
    );
};

export default FriendButtons;
