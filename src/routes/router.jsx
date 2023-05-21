import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";


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
            }
        ]
    }
])

export default router;
