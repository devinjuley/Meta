## Summary
[Meta](https://meta-social.herokuapp.com/) is a dark mode Facebook clone with only very slight changes to HTML/CSS.  Users can register new accounts or login as a demo user.  Logged in users can create posts that include text and/or an image.  Users can also create comments on posts made by themself and other users.  Logged in users can also edit/delete their own posts and comments.

## Overall Structure
This app includes the following features: Full CRUD for posts, Full CRUD for comments, search for users by first or last name, and the ability to send friend requests to other users, which can then be either accepted or denied.
### List of features
* Create an account
* Login and logout
* Login as a demo user
* Create a post with an image and/or text included
* Edit a post
* Delete a post
* Create a comment on a post
* Edit a comment
* Delete a comment
* View all friends by clicking the friends button on the left-hand side of the Main Feed page
* Within the friends menu, you can also see all users on the platform, with the option to add them as a friend
* Send friend requests to other users by clicking add friend on their profile page
* Cancel pending friends requests by clicking the request pending button on their profile page
* Accept friend requests from other users by clicking accept on the Main Feed page
* Deny friend requests from other users by clicking delete on the Main Feed page
* Unfriend other users by clicking the friends button on their profile page
* Search for users by first name and/or last name, using the search bar that is located in the top left-hand side of the nav bar

## Backend
All backend routes were designed in Express using JavaScript coding language
## Frontend
All frontend routes and components were designed in React/Redux using Javascript coding language

## Dependencies
### Backend
* bcryptjs
* cookie-parser
* cors
* csurf
* dotenv
* express
* express-async-handler
* express-validator
* faker
* helmet
* jsonwebtoken
* morgan
* per-env
* pg
* sequelize
* sequelize-cil
### Frontend
* date-fns-timezone
* js-cookie
* react
* react-dom
* react-redux
* react-router-dom
* react-scripts
* redux
* redux-thunk

## Login/Splash Page
When an unregistered user first visits the website, they are greeted with a login form and name/slogan of the website.  An unregistered user can click "Create New Account", which will open the sign-up modal where they can enter personal information and create an account.  An unregistered user can also try out the website by clicking the Demo User button, this will log them into the website under the Demo User profile.
![splash](https://i.imgur.com/Xik9slr.png)

## Sign-up Modal
Clicking on "Create New Account" from the splash page will open the sign-up modal.  An unregistered user can register an account by filling out the form and clicking "Sign Up".  When they click sign up, they will be logged into their new account.
![sign-up](https://i.imgur.com/yWE20Ub.png)

## Main Feed Page
Once a user signs up or logs in, they are redirected to the Main Feed page.  If a user didn't logout last time they used the site, the session will persist, so next time they visit the website they will be automatically redirected to their Main Feed page.  Logged in users can create posts by typing into the text box at the top center of the Main Feed page, just above the posts.  Posts can also include images, by clicking Add Photo, the Post Modal will open, where they can include an image to go along with their post.  Left-hand side menu includes: Link to users profile, link to the friends page, and a section for any incoming friend requests the user may have.  Right-hand side menu includes: sponsored link to App Academy and a list of contacts (current friends).
![Main Feed](https://i.imgur.com/GNYDtvb.png)

## Navigation Bar
Logged in users have access to the navigation bar, which is located at the top of the screen.  The navigation bar persists no matter where they are on the website, as long as they stay logged in.  The navigation bar includes: search box to search for users by first and/or last name, a home button that redirects the user to the Main Feed page, a GitHub button that redirects the user to the GitHub repo for this app, a Linked-in button that redirects the user to the developers (Devin Juley) Linked-in account, a Link to the logged in users profile, a plus button that opens the Post modal to create a new post, and a down-arrow button that opens a menu where you can log out.
![Navigation Bar](https://i.imgur.com/fDoBNiz.png)

## Profile Page
Logged in users can visit their own and other users profile pages.  The profile page includes: an intro section, all of the posts that user has made, a photos section, and a friends section.  If you are on your own profile page, you can also create new posts that will be populated in your Main Feed and on your Profile page.
![Profile Page](https://i.imgur.com/mMZjVhY.png)

## Friends Page
Logged in users can click the friends link from the Main Feed page found in the top left-hand menu.  Users can view their friends, all other users on the platform, and incoming friend requests.  On the "Your Friends" and "People You May Know" tabs, you can view each users profile by clicking "View Profile".  On the "Friend Requests" tab, you can choose to confirm or delete incoming friend requests.
![Friends Page](https://i.imgur.com/iBbvVTE.png)