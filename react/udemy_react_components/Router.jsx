import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./src/components/pages/Home"
import { UserList } from "./src/components/pages/UserList"

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/userlist" element={<UserList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}