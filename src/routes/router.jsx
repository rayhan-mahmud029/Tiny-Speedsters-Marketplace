import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/pages/Home";
import Blogs from "../components/pages/Blogs";
import ProtectedRoute from "./ProtectedRoute";
import ToyDetails from "../components/pages/ToyDetails";
import AddToy from "../components/pages/AddToy";
import AllToys from "../components/pages/AllToys";
import MyToys from "../components/pages/MyToys";
import UpdateToy from "../components/pages/Update";
import ErrorPage from "../components/pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/toy/:id',
                element: <ProtectedRoute><ToyDetails /></ProtectedRoute>,
                loader: ({ params }) => fetch(`https://tiny-speedsters-server.vercel.app/toy/${params.id}`)
            },
            {
                path: 'add-toy',
                element: <ProtectedRoute><AddToy /></ProtectedRoute>
            },
            {
                path: 'all-toys',
                element: <AllToys />
            },
            {
                path: '/my-toys',
                element: <ProtectedRoute><MyToys /></ProtectedRoute>
            },
            {
                path: '/update/:id',
                element:<ProtectedRoute> <UpdateToy /></ProtectedRoute>,
                loader: ({ params }) => fetch(`https://tiny-speedsters-server.vercel.app/toy/${params.id}`)
            }
        ]
    }
])

export default router;
