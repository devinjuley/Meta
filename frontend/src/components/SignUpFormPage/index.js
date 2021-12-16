// export { default } from './SignUpFormPage'

import { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './SignUpFormPage';

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);
    const hideForm = () => setShowModal(false)
    return (
        <>
            <button onClick={() => setShowModal(true)} className='create-account-button-splash'>Create New Account</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpFormPage hideForm={hideForm} />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;