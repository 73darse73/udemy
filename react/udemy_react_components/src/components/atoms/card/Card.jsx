import PropTypes from "prop-types";
import styled from "styled-components"

export const Card = (props) => {
    const { key, name, src } = props;
    console.log(src);
    console.log(key);
    console.log(props);
    
    return(
        <SCard id={key}>
            <SImg src={src} alt={name} />
            <SName>{name}</SName>
        </SCard>
    )
}

Card.propTypes = {
    key: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
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