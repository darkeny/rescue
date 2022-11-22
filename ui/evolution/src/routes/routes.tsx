import { BrowserRouter, Route, Routes as RoutersContainer } from 'react-router-dom'
import { Home } from '../pages'



export function Router() {
    return (
        <BrowserRouter>
            <RoutersContainer>
                <Route path={"/"} element={<Home/>} />
            </RoutersContainer>
        </BrowserRouter>
    )
}