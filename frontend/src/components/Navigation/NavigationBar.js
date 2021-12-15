import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// import other components
import ProfileButton from './ProfileButton';

//css
import './NavBar.css';

const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <div>
            <ProfileButton user={session.user} />
            <NavLink to={`/profile/${session?.user?.id}`} className={'navbar-link-to-profile'}>
               <img src={session.user.profileImageUrl} className='navbar-profile-image' />
               <span className='navbar-user-firstname'>{session?.user?.firstName}</span>
            </NavLink>
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
         <ul>
            <li>
               <NavLink to='/'>Home</NavLink>
               {isLoaded && sessionLinks}
            </li>
         </ul>
      </div>
   );
};

export default NavigationBar;
