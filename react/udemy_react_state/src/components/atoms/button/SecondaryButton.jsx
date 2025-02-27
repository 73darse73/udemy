import styled from "styled-components"
import { PropTypes } from "prop-types"

export const SecondaryButton = (props) => {
    const { children, onClick } = props;
    return(
        <>
            <SButton onClick={onClick}>{children}</SButton>
        </>
    )
}

const SButton = styled.button`
    background-color: pink;
`

SecondaryButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isReqired
}