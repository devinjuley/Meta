import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { login } from '../../store/session'

import './LoginForm.css';


const LoginFormPage = () => {
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


   return (
      <div className='login-splash-page-parent'>
         <div className='div-around-logo-and-slogan'>
            <div className='splash-meta-logo'>Meta</div>
            <div className='splash-slogan'>Connect with friends and the world around you on Meta.</div>
         </div>
         <div className='div-for-login-form-splash'>
            <form onSubmit={handleSubmit} className='login-form-splash'>
               {/* <div> */}
               <ul>
                  {errors.map((error, i) => (
                     <li key={i}>{error}</li>
                  ))}
               </ul>
               {/* </div> */}
               {/* <div> */}
               <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Email'
                  className='login-email-field-splash'
               />
               {/* </div> */}
               {/* <div> */}
               <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Password'
                  className='login-password-field-splash'
               />
               {/* </div> */}
               <button type='submit' className='login-button-splash'>Log In</button>
            </form>
            {/* <div> */}
            <button className='demo-button-splash'>Demo</button>
            {/* </div> */}
            {/* <div> */}
            <button className='create-account-button-splash'>Create New Account</button>
            {/* </div> */}
         </div >
      </div >
   );
};


export default LoginFormPage;
