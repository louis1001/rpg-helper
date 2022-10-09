import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Main from '../pages/main'
import Rules from '../pages/rules'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Main />
            },
            {
                path: "rules",
                element: <Rules />
            }
        ]
    }
])

export {router}