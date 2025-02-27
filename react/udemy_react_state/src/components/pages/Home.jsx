import { DefaultLayout } from "../templates/DefaultLayout"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"

export const Home = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        navigate("/userlist")
    };
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        navigate("/userlist")
    };
    return(
        <DefaultLayout>
            <h1>Home</h1>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </DefaultLayout>
    )
}