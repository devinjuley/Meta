import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { searchResultsThunk } from '../../store/search';
import CreatePostModalNavBar from '../CreatePost/CreatePostNavBar';

// import other components
import ProfileButton from './ProfileButton';

//css
import './NavBar.css';


const NavigationBar = ({ isLoaded }) => {
   const dispatch = useDispatch()
   const session = useSelector(state => state.session);
   const [searchString, setSearchString] = useState('');
   const [divStyle, setDivStyle] = useState({ visibility: 'hidden' })
   const searchResults = useSelector(state => state?.searchResults)
   const searchResultsArr = Object.assign([], searchResults)
   useEffect(() => {
      if (searchString !== '') {
         dispatch(searchResultsThunk(searchString))
      }
   }, [dispatch, searchString])

   // let hasFocus = ('.navbar-search-input-field').is(':focus');
   // if (hasFocus) {
   //    //logic here
   // }

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <div className='logged-in-links'>
            <div className='navbar-section-1'>
               <NavLink to='/' className={'navbar-logo'}>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921649451758682142/unknown.png' className='meta-image-logo' alt='' />
               </NavLink>
               <div className='search-bar-div'>
                  <div>
                     <input
                        placeholder='Search Meta'
                        type='search'
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        className='navbar-search-input-field'
                        onFocus={(e) => setDivStyle({ visibility: 'visible' })}
                     />
                     <div style={divStyle} className='search-results-parent-div'>
                        {(searchString !== '') && (searchResultsArr?.map(user => (
                           <a key={user?.id} href={`/profile/${user.id}`} className='a-link-single-result'>
                              <img src={user?.profileImageUrl} className='user-image-in-results' alt='' />
                              <div>
                                 <div className='name-in-results'>{`${user?.firstName} ${user?.lastName}`}</div>
                              </div>
                           </a>
                        )))}
                     </div>
                  </div>
               </div>
            </div>
            <div className='navbar-section-2'>
               <NavLink to='/' className={''}>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921672323885592596/unknown.png' className='navbar-center-image-1' alt='' />
               </NavLink>
               <a href='https://github.com/devinjuley/Meta' className={''}>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921671742634733618/unknown.png' className='navbar-center-image-2' alt='' />
               </a>
               <a href='https://www.linkedin.com/in/devin-juley-6b4847149/' className={''}>
                  <img src='https://media.discordapp.net/attachments/921246913167245363/921671591136469052/unknown.png' className='navbar-center-image-3' alt='' />
               </a>
            </div>
            <div className='navbar-section-3'>
               <NavLink to={`/profile/${session?.user?.id}`} className={'navbar-link-to-profile'}>
                  <img src={session.user.profileImageUrl} className='navbar-profile-image' alt='' />
                  <span className='navbar-user-firstname'>{session?.user?.firstName}</span>
               </NavLink>
               <div className='div-around-postmodal-navbar'>
                  <CreatePostModalNavBar />
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
         <div>{isLoaded && sessionLinks}</div>
      </div>
   );
};

export default NavigationBar;
