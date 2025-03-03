import { createContext, Dispatch, SetStateAction, useState } from "react";

import { User } from "../types/api/user";

export type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
    loginUser: LoginUser | null;
    setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export type Props = {
    children: React.ReactNode;
}

export const LoginUserProvider = (props: Props) => {
    const { children } = props;
    const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    );
}