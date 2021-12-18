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
            <div className='navbar-section-1'>
               <NavLink to='/' className={'navbar-logo'}>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921649451758682142/unknown.png' className='meta-image-logo' />
                  Meta
               </NavLink>
               <div>
                  <input
                     placeholder='Search Meta'
                     type='search'
                     value={searchString}
                     onChange={(e) => setSearchString(e.target.value)}
                     className='navbar-search-input-field'
                  />
               </div>
            </div>
            <div className='navbar-section-2'>
               <NavLink to='/' className={''}>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921647415474397204/unknown.png' className='navbar-center-image-1' />
               </NavLink>
               <div>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921645159278600302/unknown.png' className='navbar-center-image-2' />
               </div>
               <div>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921646883003326494/unknown.png' className='navbar-center-image-3' />
               </div>
            </div>
            <div className='navbar-section-3'>
               <NavLink to={`/profile/${session?.user?.id}`} className={'navbar-link-to-profile'}>
                  <img src={session.user.profileImageUrl} className='navbar-profile-image' />
               </NavLink>
               <span className='navbar-user-firstname'>{session?.user?.firstName}</span>
               <div>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921651170504757268/unknown.png' className='add-post-plus-sign' />
               </div>
               <ProfileButton user={session.user} />
            </div>
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
         {/* <ul className='navbar-ul'> */}
         {/* <li className='navbar-li-1'> */}
         <div>{isLoaded && sessionLinks}</div>
         {/* </li> */}
         {/* </ul> */}
      </div>
   );
};

export default NavigationBar;
