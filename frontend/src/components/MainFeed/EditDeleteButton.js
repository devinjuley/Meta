import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePostThunk } from '../../store/friendsAndPosts';

// import { logout } from '../../store/session';

const EditDeleteButton = ({ post }) => {
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


    const handleDelete = () => {
        dispatch(deletePostThunk(post.id))
    };


    return (
        <div>
            <div onClick={openMenu} className='dot-dot-dot'>...</div>
            {showMenu && (
                <div className='edit-delete-dropdown-menu'>
                    <div className='edit-button-dropdown'>Edit post</div>
                    <div className='delete-button-dropdown' onClick={handleDelete}>Delete post</div>
                </div>
            )}
        </div>
    );
};

export default EditDeleteButton;
