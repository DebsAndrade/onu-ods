import styled  from "styled-components";

export const ContainerHeader = styled.header`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 1.5vw;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        padding: 7vw;
    }
`

export const OnuImg = styled.img`
    width: 20vw;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        width: 80vw;
    }
`

export const H1 = styled.h1`
    font-size: 3em;
    line-height: 2em;
    text-align: center;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        font-size: 2em;
        line-height: 1em;
        padding: 5vw;
    }
`

export const H2 = styled.h2`
    font-size: 2em;
    line-height: 1.2em;
    text-align: center;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        font-size: 1.2em;
        line-height: 1em;
    }
`