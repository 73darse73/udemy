import { Link, Outlet } from 'react-router-dom'

export const Page1 = () => {
    return (
        <>
            <h1>Page1</h1>
            <Link to="/page1/detailA">DetailA</Link>
            <Link to="/page1/detailB">DetailB</Link>
            <Outlet />
        </>
    )
}
