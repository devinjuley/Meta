import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function FriendsPage() {
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    if (!sessionUser?.id) {
        history.push('/login')
    }
    return (
        <div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
            <div>Friends Page placeholder</div>
        </div>
    )
}

export default FriendsPage;