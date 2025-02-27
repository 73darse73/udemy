import { Link } from "react-router-dom"


export const Header = () => {
    return(
        <>
            <Link to="/" >HOME</Link>
            <Link to="/userlist">USERLIST</Link>
        </>
    )
}