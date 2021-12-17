import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ProfilePage() {
    // const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    // if (!sessionUser?.id) {
    //     history.push('/login')
    // }
    return (
        <div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>
            <div>Profile page placeholder</div>

        </div>
    )
}

export default ProfilePage;