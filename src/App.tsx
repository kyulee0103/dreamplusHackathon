import React from 'react'
import {createGlobalStyle} from 'styled-components'
import {Outlet} from 'react-router-dom'
import './App.css'
import {MetaMaskProvider} from './Hooks'
import ScrollToTop from './Components/ScrollTop'

function App() {
    return (
        <>
            <MetaMaskProvider>
                <ScrollToTop />
                <Outlet />
            </MetaMaskProvider>
        </>
    )
}

export default App
