import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMainFeed } from '../../store/mainFeed';
import './FriendsPage.css'

function FriendsPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user)
    const friends = useSelector(state => state?.mainFeed?.friends)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(async () => {
        await dispatch(getMainFeed(sessionUser?.id))
        setIsLoaded(true)
    }, [dispatch, sessionUser.id])

    return (
        <>
            {isLoaded && (<div className='friends-page-parent-div'>
                <div className='left-side-of-friends-page'>
                    <div>Friends</div>
                </div>
                <div className='right-side-of-friends-page'>

                </div>

            </div>)}
        </>
    )
}

export default FriendsPage;