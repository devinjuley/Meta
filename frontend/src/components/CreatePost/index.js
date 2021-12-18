// export { default } from './SignUpFormPage'

import { useState } from 'react';
import { DarkModal } from '../../context/ModalDarkMode';
import CreatePostPage from './CreatePost';

function CreatePostModal() {
    const [showModal, setShowModal] = useState(false);
    const hideForm = () => setShowModal(false)
    return (
        <>
            <button className='photo-button-mainfeed' onClick={() => setShowModal(true)}>
                <img src='https://media.discordapp.net/attachments/921246913167245363/921248928538693642/unknown.png' className='create-a-post-icons' />
                Add Photo</button>
            {showModal && (
                <DarkModal onClose={() => setShowModal(false)}>
                    <CreatePostPage hideForm={hideForm} />
                </DarkModal>
            )}
        </>
    );
}

export default CreatePostModal;