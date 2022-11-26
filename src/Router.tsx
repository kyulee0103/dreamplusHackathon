import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Connect from './Pages/Connect'
import Main from './Pages/Main'
import NewForm from './Pages/NewForm'
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
            {
                path: 'new',
                element: <NewForm />,
            },
        ],
        errorElement: <NotFound />,
    },
])

export default router
