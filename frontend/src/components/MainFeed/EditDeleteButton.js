import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePostThunk, editPostThunk } from '../../store/friendsAndPosts';
import './MainFeed.css'

// import { logout } from '../../store/session';

const EditDeleteButton = ({ post, setShowEditBox }) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);

    }, [showMenu]);


    const handleEdit = () => {
        // dis
    }

    const handleDelete = () => {
        dispatch(deletePostThunk(post.id))
    };



    return (
        <div>
            <div onClick={openMenu} className='dot-dot-dot'>...</div>
            {showMenu && (
                <div className='hidden-div-around-edit-delete-menu'>
                    <div className='edit-delete-dropdown-menu'>
                        <div className='border-between-edit-delete'>
                            <div className='edit-button-dropdown' onClick={() => setShowEditBox(true)}>
                                <img src='https://media.discordapp.net/attachments/921246913167245363/922208971253751838/unknown.png' className='edit-pencil-icon' />
                                Edit</div>
                        </div>
                        <div className='delete-button-dropdown' onClick={handleDelete}>
                            <img src='https://media.discordapp.net/attachments/921246913167245363/922209557898465280/unknown.png' className='delete-trashcan-icon' />
                            Delete</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditDeleteButton;
