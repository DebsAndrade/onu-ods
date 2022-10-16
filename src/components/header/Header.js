import React from "react";
import * as S from "../../styles/HeaderStyle";
import OnuLogo from "../../assets/image/onu-logo.png";

const Header = () => {

    return(
        <S.ContainerHeader>
            <S.OnuImg src={OnuLogo} alt="Logomarca da Organização Mundial da Saúde-ONU" />
            <S.H1>Objetivos de Desenvolvimento Sustentável</S.H1>
            <S.H2>17 Objetivos para transformar o nosso mundo</S.H2>
        </S.ContainerHeader>
    )
}

export default Header;