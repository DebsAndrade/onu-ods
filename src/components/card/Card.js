import React from "react";
import * as S from "../../styles/CardStyle";

const Card = ({ title, description, url, thumbnail}) => {
    return(
        <S.ContainerCard>
            <S.Card>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={thumbnail} alt="Onu-ODS"/>
                </a>
            </S.Card>
        </S.ContainerCard>
    )
}

export default Card;