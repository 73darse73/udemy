import { HeaderOnly } from "../templates/HeaderOnly"
import { CardList } from "../organism/CardList"

export const UserList = () => {
    return(
        <HeaderOnly>
            <h1>UserList</h1>
            <CardList></CardList>
        </HeaderOnly>
    )
}