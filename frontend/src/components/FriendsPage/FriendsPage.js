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
    const friendsArr = Object.assign([], friends)

    useEffect(async () => {
        await dispatch(getMainFeed(sessionUser?.id))
        setIsLoaded(true)
    }, [dispatch, sessionUser.id])

    return (
        <>
            {isLoaded && (<div className='friends-page-parent-div'>
                <div className='left-side-of-friends-page'>
                    <div className='friends-title-friends-page'>Friends</div>
                </div>
                <div className='right-side-of-friends-page'>
                    {friendsArr?.map(friend => (
                        <div className='single-friend-parent-div'>
                            <img src={friend?.User?.profileImageUrl} className='friend-image-on-friends-page' />
                            <div className='name-friend-page'>{`${friend?.User?.firstName} ${friend?.User?.lastName}`}</div>
                            <button className='remove-friend-button'>Remove Friend</button>
                        </div>
                    ))}
                </div>

            </div>)}
        </>
    )
}

export default FriendsPage;