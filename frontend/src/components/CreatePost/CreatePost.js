import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostThunk } from '../../store/mainFeed';


import './CreatePost.css'


const CreatePostPage = ({ hideForm }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)

    const [textContent, setTextContent] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    const [errors, setErrors] = useState([]);

    const postPlaceholder = `What's on your mind, ${sessionUser.firstName}?`



    const handleSubmit = async (e) => {
        e.preventDefault();


        const post = {
            userId: sessionUser?.id,
            content: textContent,
            imageUrl
        }
        let newPost = await dispatch(createPostThunk(post))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        if (newPost) {
            hideForm()
        }
        //   return setErrors(['Confirm Password field must be the same as the Password field']);
    };
    let buttonSwitch;
    if (textContent === '' && (imageUrl === null || imageUrl === '')) {
        buttonSwitch = true
    } else {
        buttonSwitch = false
    }


    return (
        <div className='create-post-parent-modal'>
            <form onSubmit={handleSubmit} className=''>
                <div className='create-post-title-modal'>Create Post</div>
                <div className='post-modal-name-and-profile-image'>
                    <img src={sessionUser?.profileImageUrl} className='profile-image-create-post-modal' alt='' />
                    <div>{`${sessionUser?.firstName} ${sessionUser?.lastName}`}</div>
                </div>
                <div className='textarea-div-post-modal'>
                    <textarea
                        value={textContent}
                        placeholder={postPlaceholder}
                        onChange={(e) => setTextContent(e.target.value)}
                        className='text-content-post-modal'
                    />
                </div>
                <div className='div-around-postmodal-errors'>
                    {errors.map((error, i) => (
                        <div className='div-around-single-error-postmodal'>
                            <img src='https://media.discordapp.net/attachments/921246913167245363/926208511799615538/unknown.png' className='error-icon' />
                            <div key={i} className='single-error-postmodal'>{error}</div>
                        </div>
                    ))}
                </div>
                <div className='image-input-div-post-modal'>
                    <input
                        type='text'
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder='Image URL'
                        className='image-input-post-modal'
                    />
                </div>
                <div className='post-button-div-post-modal'>
                    <button type='submit' className='post-button-post-modal' disabled={buttonSwitch}>Post</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;
