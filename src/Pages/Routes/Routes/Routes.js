import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import Profile from "../../About/Profile";
import Error from "../../Error/Error";
import Home from "../../Home/Home";
import SignIn from "../../JoinUs/SignIn/SignIn";
import SignUp from "../../JoinUs/SignUp/SignUp";
import Media from "../../Media/Media";
import MediaDetails from "../../Media/MediaDetails/MediaDetails";
import Message from "../../Message/Message";
import AddPost from "../../Post/AddPost";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        },
        {
          path: '/addPost',
          element: <AddPost></AddPost>
        },
        {
          path: '/media',
          element: <Media></Media>
        },
        {
          path: '/details',
          element: <MediaDetails></MediaDetails>
        },
        {
          path: '/message',
          element: <Message></Message>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        }
        ]
    }
  ]);

  export default router;