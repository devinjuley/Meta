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
      <div>

         <img src='https://media.discordapp.net/attachments/921246913167245363/921639971071361074/unknown.png' className='logout-dropdown-menu' onClick={openMenu} />

         {showMenu && (
            <ul className='profile-dropdown'>
               <li>{user.firstName}{user.lastName}</li>
               <li>{user.email}</li>
               <li>
                  <button onClick={signOut}>Log Out</button>
               </li>
            </ul>
         )}
      </div>
   );
};

export default ProfileButton;
