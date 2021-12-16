import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import SignUpFormModal from '../SignUpFormPage';

import { login } from '../../store/session'
// import Sign

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
               <ul>
                  {errors.map((error, i) => (
                     <li key={i}>{error}</li>
                  ))}
               </ul>
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
