import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/pages/Home";


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
            }
        ]
    }
])

export default router;
