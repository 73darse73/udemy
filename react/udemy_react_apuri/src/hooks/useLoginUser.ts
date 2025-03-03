import { useContext } from "react";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const useLoginUser = () => {
    const { loginUser, setLoginUser } = useContext(LoginUserContext);
    return { loginUser, setLoginUser };
}

