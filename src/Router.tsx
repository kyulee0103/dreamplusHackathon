import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Connect from './Pages/Connect'
import Main from './Pages/Main'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            {
                path: 'connect',
                element: <Connect />,
            },
            {
                path: 'search',
                element: <Search />,
            },
        ],
        errorElement: <NotFound />,
    },
])

export default router
