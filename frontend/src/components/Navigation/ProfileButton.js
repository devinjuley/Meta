import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/session';

const ProfileButton = ({ user }) => {
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);

   const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
   };

   useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
         setShowMenu(false);
      };
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener("click", closeMenu);

   }, [showMenu]);


   const signOut = (e) => {
      e.preventDefault();
      dispatch(logout());
   }



   return (
      <div className='div-around-profilebutton-navbar'>

         <img src='https://media.discordapp.net/attachments/921246913167245363/921639971071361074/unknown.png' className='logout-dropdown-menu' onClick={openMenu} />
         <div className='div-around-profile-dropdown'>
            {showMenu && (
               <div className='profile-dropdown'>
                  <a href={`/profile/${user.id}`} className='link-to-profile-dropdown'>
                     <img src={user.profileImageUrl} className='img-inside-profile-dropdown' />
                     <div>
                        <div className='name-inside-dropdown-menu'>{`${user.firstName} ${user.lastName}`}</div>
                        <div className='see-your-profile'>See your profile</div>
                     </div>
                  </a>
                  <div className='other-options-dropdown'>
                     <button onClick={signOut} className='logout-button-dropdown'>Log Out</button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default ProfileButton;
