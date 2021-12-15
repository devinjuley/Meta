import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// thunk import
import { signUp } from '../../store/session';

import styles from './SignUpForm.module.css'

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
   const [profileImageUrl, setProfileImageUrl] = useState('');
   const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPass, setConfirmPass] = useState('');
   const [errors, setErrors] = useState([]);

   if (session.user) {
      return (
         <Redirect to='/' />
      );
   };

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
      return setErrors(['Confirm Password field must be the same as the Password field']);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>

            <input
               type='text'
               value={firstName}
               onChange={e => setFirstName(e.target.value)}
               placeholder='First Name'
            />
            <input
               type='text'
               value={lastName}
               onChange={e => setLastName(e.target.value)}
               placeholder='Last Name'
            />
            <input
               type='email'
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder='Email'
            />
            <input
               type='text'
               value={workplace}
               onChange={e => setWorkplace(e.target.value)}
               placeholder='Workplace'
            />
            <input
               type='text'
               value={city}
               onChange={e => setCity(e.target.value)}
               placeholder='City'
            />
            <input
               type='text'
               value={state}
               onChange={e => setState(e.target.value)}
               placeholder='State'
            />
            <input
               type='text'
               value={birthCity}
               onChange={e => setBirthCity(e.target.value)}
               placeholder='Birth City'
            />
            <input
               type='text'
               value={birthState}
               onChange={e => setBirthState(e.target.value)}
               placeholder='Birth State'
            />
            <input
               type='text'
               value={profileImageUrl}
               onChange={e => setProfileImageUrl(e.target.value)}
               placeholder='Profile Image URL'
            />
            <input
               type='text'
               value={backgroundImageUrl}
               onChange={e => setBackgroundImageUrl(e.target.value)}
               placeholder='Background Image URL'
            />

            <input
               type='password'
               value={password}
               onChange={e => setPassword(e.target.value)}
               placeholder='Password'
            />
            <input
               type='password'
               value={confirmPass}
               onChange={e => setConfirmPass(e.target.value)}
               placeholder='Confirm Password'
            />

            <button type='submit'>Sign Up</button>
         </form>
      </div>
   );
};

export default SignUpFormPage;
