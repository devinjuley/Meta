import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// import other components
import ProfileButton from './ProfileButton';

//css
import './NavBar.css';

const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);
   const [searchString, setSearchString] = useState('');

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <div className='logged-in-links'>
            <NavLink to='/' className={'navbar-logo'}><div>logo</div></NavLink>
            <div>
               <input
                  placeholder='Search Meta'
                  type='search'
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                  className='navbar-search-input-field'
               />
            </div>
            <NavLink to={`/profile/${session?.user?.id}`} className={'navbar-link-to-profile'}>
               <img src={session.user.profileImageUrl} className='navbar-profile-image' />
            </NavLink>
            <span className='navbar-user-firstname'>{session?.user?.firstName}</span>
            <NavLink to='/' className={'navbar-logo'}>Home</NavLink>
            <ProfileButton user={session.user} />

         </div>
      )
   } else {
      sessionLinks = (
         <div>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
         </div>
      )
   }

   return (
      <div className='navbar-parent-div'>
         <ul className='navbar-ul'>
            <li className='navbar-li-1'>
               <div>{isLoaded && sessionLinks}</div>
            </li>
         </ul>
      </div>
   );
};

export default NavigationBar;
