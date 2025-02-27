import { useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState(null);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}