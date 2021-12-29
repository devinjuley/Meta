
import { useState } from 'react';
import { DarkModal } from '../../context/ModalDarkMode';
import CreatePostPage from './CreatePost';

function CreatePostModalNavBar() {
    const [showModal, setShowModal] = useState(false);
    const hideForm = () => setShowModal(false)
    return (
        <>
            <img src='https://media.discordapp.net/attachments/921246913167245363/921651170504757268/unknown.png' alt='' onClick={() => setShowModal(true)} className='add-post-plus-sign' />
            {showModal && (
                <DarkModal onClose={() => setShowModal(false)}>
                    <CreatePostPage hideForm={hideForm} />
                </DarkModal>
            )}
        </>
    );
}

export default CreatePostModalNavBar;