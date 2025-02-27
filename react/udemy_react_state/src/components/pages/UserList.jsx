import { HeaderOnly } from "../templates/HeaderOnly"
import { CardList } from "../organism/CardList"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useRecoilState } from "recoil";
import { userState } from "../../store/user.State";

export const UserList = () => {
    // const { userInfo, setUserInfo } = useContext(UserContext);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const onClickSwitch = () => {
        setUserInfo({ isAdmin: !userInfo.isAdmin });
    }
    return(
        <HeaderOnly>
            <h1>UserList</h1>
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <CardList></CardList>
        </HeaderOnly>
    )
}