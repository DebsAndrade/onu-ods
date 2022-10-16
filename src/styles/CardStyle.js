import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        width: 90vw;
    }
`

export const Card = styled.div`
    margin: 15px;
    background-color: #4d4d4d;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 250px;
    transition: all 0.2s;
    border: 1px solid #418FDE;

    &:hover {
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.01);
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
`