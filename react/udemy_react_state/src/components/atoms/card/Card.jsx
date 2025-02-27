import PropTypes from "prop-types";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";
import styled from "styled-components";

export const Card = (props) => {
    const { name, src } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return(
        <SCard>
            <SImg src={src} alt={name} />
            <SName>{name}</SName>
            { isAdmin && <SEdit>編集</SEdit>}
        </SCard>
    )
}

Card.propTypes = {
    key: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    isAdmin: PropTypes.boolian
}

const SCard = styled.div`
    max-width: 300px;
    width: 90%;
    margin-inline: auto;
    background-color: lightBlue;
`;
const SImg = styled.img`
    max-width: 100%;
`;
const SName = styled.p`
    
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursol: pointer;
`;