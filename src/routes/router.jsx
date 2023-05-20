import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Login from "../components/Auth/Login";


const  router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router;
