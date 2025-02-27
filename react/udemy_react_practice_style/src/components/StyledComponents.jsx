import styled from "styled-components"

export const StyledComponents = () => {
    return (
        <Container>
            <Title>こんにちは！</Title>
            <Button>Fight!</Button>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    background-color: #e9ffa5;
    border: solid 2px #46cdcf;
    border-radius: 20px;
    padding: 10px;
`   
const Title = styled.p`
    color: #3d84a8;
    margin: 0;
    line-height: 1.5;
`
const Button = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
`