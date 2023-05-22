import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/pages/Home";
import Blogs from "../components/pages/Blogs";
import ProtectedRoute from "./ProtectedRoute";
import ToyDetails from "../components/pages/ToyDetails";


const  router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/toy-details/:id',
                element: <ProtectedRoute><ToyDetails/></ProtectedRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/all-toys/${params.id}`)
            }
        ]
    }
])

export default router;
