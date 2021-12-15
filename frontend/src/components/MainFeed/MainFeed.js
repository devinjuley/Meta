import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MainFeed() {
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    if (!sessionUser?.id) {
        history.push('/login')
    }
    return (
        <div>
            <div>
                <img src={sessionUser?.profileImageUrl} />
                <div>{sessionUser?.firstName} {sessionUser?.lastName}</div>
            </div>
        </div>
    )
}

export default MainFeed;