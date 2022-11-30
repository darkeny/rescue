import React from 'react'
import { BrowserRouter, Route, Routes as RoutersContainer } from 'react-router-dom'
import { Home } from '../pages'
import { Auth } from '../pages/auth'



export function Router() {
    return (
        <BrowserRouter>
            <RoutersContainer>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/auth"} element={<Auth/>} />
            </RoutersContainer>
        </BrowserRouter>
    )
}