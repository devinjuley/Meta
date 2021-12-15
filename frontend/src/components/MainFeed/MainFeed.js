import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './MainFeed.css'

function MainFeed() {
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    if (!sessionUser?.id) {
        history.push('/login')
    }
    return (
        <div className='main-feed-parent-div'>
            <div className='user-fullname-and-pic-mainfeed'>
                <img src={sessionUser?.profileImageUrl} className='mainfeed-profile-image' />
                <div>{sessionUser?.firstName} {sessionUser?.lastName}</div>
            </div>
            <NavLink to='/friends' className='friends-parent-mainfeed'>
                <div className='friends-logo-mainfeed'>frnds</div>
                <div>Friends</div>
            </NavLink>
        </div>
    )
}

export default MainFeed;