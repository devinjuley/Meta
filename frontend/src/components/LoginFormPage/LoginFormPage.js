import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import SignUpFormModal from '../SignUpFormPage';

import { login } from '../../store/session'


import './LoginForm.css';


const LoginFormPage = () => {
   const history = useHistory()
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   if (sessionUser) {
      return (
         <Redirect to='/' />
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(login({ email, password }))
         .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
         });
   }
   const handleDemoLogin = async () => {
      const email = 'demo@user.io';
      const password = 'password'
      return await dispatch(login({ email, password }))
   };


   return (
      <div className='login-splash-page-parent'>
         <div className='div-around-logo-and-slogan'>
            <div className='splash-meta-logo'>Meta</div>
            <div className='splash-slogan'>Connect with friends and the world around you on Meta.</div>
         </div>
         <div className='div-for-login-form-splash'>
            <form onSubmit={handleSubmit} className='login-form-splash'>
               <div className='div-around-login-errors'>
                  {errors.map((error, i) => (
                     <div className='div-around-single-error-login'>
                        <img src='https://media.discordapp.net/attachments/921246913167245363/926208511799615538/unknown.png' className='error-icon' />
                        <div key={i} className='errors-for-login'>{error}</div>
                     </div>
                  ))}
               </div>
               <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Email'
                  className='login-email-field-splash'
               />
               <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Password'
                  className='login-password-field-splash'
               />
               <button type='submit' className='login-button-splash'>Log In</button>
            </form>
            <button onClick={handleDemoLogin} className='demo-button-splash'>Demo</button>
            <SignUpFormModal />
         </div >
      </div >
   );
};


export default LoginFormPage;
