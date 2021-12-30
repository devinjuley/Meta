import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// thunk import
import { signUp } from '../../store/session';

import './SignUpForm.css';

const SignUpFormPage = () => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session)

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [workplace, setWorkplace] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [birthCity, setBirthCity] = useState('');
   const [birthState, setBirthState] = useState('');
   const [profileImageUrl, setProfileImageUrl] = useState(null);
   const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);
   const [password, setPassword] = useState('');
   const [confirmPass, setConfirmPass] = useState('');
   const [errors, setErrors] = useState([]);

   if (session.user) {
      return (
         <Redirect to='/' />
      );
   };

   const newErrors = []
   errors.forEach(error => {
      if (error !== 'Invalid value') {
         newErrors.push(error)
      }
   })

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPass) {
         setErrors([]);
         return dispatch(signUp({ firstName, lastName, email, workplace, city, state, birthCity, birthState, profileImageUrl, backgroundImageUrl, password }))
            .catch(async (res) => {
               const data = await res.json();
               if (data && data.errors) setErrors(data.errors);
            });
      }
      return setErrors(['Password and Confirm Password do not match']);
   };

   return (
      <div className='outer-div-signup-form'>
         <div className='sign-up-form-parent'>
            <form onSubmit={handleSubmit} className='sign-up-form'>
               <div className='signup-modal-title'>Sign Up</div>
               <div className='signup-title-slogan'>It's quick and easy.</div>
               <div>
                  <input
                     type='text'
                     value={firstName}
                     onChange={e => setFirstName(e.target.value)}
                     placeholder='First Name'
                     className='smaller-input-fields-signup-left'
                  />
                  <input
                     type='text'
                     value={lastName}
                     onChange={e => setLastName(e.target.value)}
                     placeholder='Last Name'
                     className='smaller-input-fields-signup'
                  />
               </div>
               <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email'
                  className='larger-input-fields-signup'
               />
               <input
                  type='text'
                  value={workplace}
                  onChange={e => setWorkplace(e.target.value)}
                  placeholder='Workplace'
                  className='larger-input-fields-signup'
               />
               <div>
                  <input
                     type='text'
                     value={city}
                     onChange={e => setCity(e.target.value)}
                     placeholder='City'
                     className='smaller-input-fields-signup-left'
                  />
                  <input
                     type='text'
                     value={state}
                     onChange={e => setState(e.target.value)}
                     placeholder='State'
                     className='smaller-input-fields-signup'
                  />
               </div>
               <div>
                  <input
                     type='text'
                     value={birthCity}
                     onChange={e => setBirthCity(e.target.value)}
                     placeholder='Birth City'
                     className='smaller-input-fields-signup-left'
                  />
                  <input
                     type='text'
                     value={birthState}
                     onChange={e => setBirthState(e.target.value)}
                     placeholder='Birth State'
                     className='smaller-input-fields-signup'
                  />
               </div>
               <input
                  type='text'
                  value={profileImageUrl}
                  onChange={e => setProfileImageUrl(e.target.value)}
                  placeholder='Profile Image URL'
                  className='larger-input-fields-signup'
               />
               <input
                  type='text'
                  value={backgroundImageUrl}
                  onChange={e => setBackgroundImageUrl(e.target.value)}
                  placeholder='Background Image URL'
                  className='larger-input-fields-signup'
               />
               <div>
                  <input
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     placeholder='Password'
                     className='smaller-input-fields-signup-left'
                  />
                  <input
                     type='password'
                     value={confirmPass}
                     onChange={e => setConfirmPass(e.target.value)}
                     placeholder='Confirm Password'
                     className='smaller-input-fields-signup'
                  />
               </div>

               <button type='submit' className='signup-button-in-modal'>Sign Up</button>
            </form>
         </div>
         <div className='ul-around-signup-errors'>
            {newErrors.map((error, i) => (
               <div className='div-around-sign-up-single-error'>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/925609578375290960/unknown.png' className='error-icon' />
                  <div key={i} className='sign-up-errors'>{error}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SignUpFormPage;
