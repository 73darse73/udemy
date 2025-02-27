import styled from "styled-components"

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

