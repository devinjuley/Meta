import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// thunk inport
import { restoreUser } from './store/session'

//component import
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import NavigationBar from './components/Navigation/NavigationBar';
import MainFeed from './components/MainFeed/MainFeed';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FriendsPage from './components/FriendsPage/FriendsPage';

function App() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch])

  if (sessionUser?.id) {
    return (
      <>
        <NavigationBar isLoaded={isLoaded} />

        {isLoaded && (
          <Switch>


            <Route exact path='/'>
              <MainFeed />
            </Route>
            <Route path='/profile/:id'>
              <ProfilePage />
            </Route>
            <Route to='/friends'>
              <FriendsPage />
            </Route>
          </Switch>
        )}
      </>
    );
  } else {
    // history.push('/')
    return (
      <>
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignUpFormPage />
            </Route>
          </Switch>
        )}
      </>
    )
  }
}

export default App;
