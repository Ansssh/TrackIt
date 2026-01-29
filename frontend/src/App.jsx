import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LL" element={<Login />} />
            </Routes>
        </>
    )
}

export default App