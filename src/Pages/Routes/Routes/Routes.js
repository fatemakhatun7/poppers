import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Error from "../../Error/Error";
import Home from "../../Home/Home";
import SignIn from "../../JoinUs/SignIn/SignIn";
import SignUp from "../../JoinUs/SignUp/SignUp";
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
        }
        ]
    }
  ]);

  export default router;