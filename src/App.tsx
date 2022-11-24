import React from 'react'
import {createGlobalStyle} from 'styled-components'
import {Outlet} from 'react-router-dom'
import './App.css'
import {MetaMaskProvider} from './Hooks'

function App() {
    return (
        <>
            <MetaMaskProvider>
                <Outlet />
            </MetaMaskProvider>
        </>
    )
}

export default App
