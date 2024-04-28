import{createBrowserRouter} from'react-router-dom';
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Dashbord from '../pages/Dashbord';
import PageNotFound from '../pages/PageNotFound';
import Layout from '../layouts/Layout';




export const Router=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/Jobs',
                element:<Jobs/>
            },
            {
                path:'/Profile',
                element:<Profile/>
            },
            {
                path:'/Contact',
                element:<Contact/>
            },
            {
                path:'/Register',
                element:<Register/>
            },
            {
                path:'/SignIn',
                element:<SignIn/>
            },
            {
                path:'/Dashbord',
                element:<Dashbord/>
            },
            {
                path:'*',
                element:<PageNotFound/>
            },



        ]

    },

])