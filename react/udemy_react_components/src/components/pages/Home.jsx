import { DefaultLayout } from "../templates/DefaultLayout"
import { SecondaryButton } from "../atoms/button/SecondaryButton"

export const Home = () => {
    const onClickAdmin = () => {
        history.pushState({ pathname: "/users", state: { isAdmin: true }})
    };
    const onClickGeneral = () => {
        history.pushState({ pathname: "/users", state: { isAdmin: false }})
    };
    return(
        <DefaultLayout>
            <h1>Home</h1>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </DefaultLayout>
    )
}