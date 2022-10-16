import React from "react";
import Card from "../components/card/Card";
import styled from "styled-components";
import Ods01 from "../assets/image/ods_01.png";
import Ods02 from "../assets/image/ods_02.png";
import Ods03 from "../assets/image/ods_03.png";
import Ods04 from "../assets/image/ods_04.png";
import Ods05 from "../assets/image/ods_05.png";
import Ods06 from "../assets/image/ods_06.png";
import Ods07 from "../assets/image/ods_07.png";
import Ods08 from "../assets/image/ods_08.png";
import Ods09 from "../assets/image/ods_09.png";
import Ods10 from "../assets/image/ods_10.png";
import Ods11 from "../assets/image/ods_11.png";
import Ods12 from "../assets/image/ods_12.png";
import Ods13 from "../assets/image/ods_13.png";
import Ods14 from "../assets/image/ods_14.png";
import Ods15 from "../assets/image/ods_15.png";
import Ods16 from "../assets/image/ods_16.png";
import Ods17 from "../assets/image/ods_17.png";

const InfoCards = [

    {
        thumbnail: Ods01,
        url: "https://unescoportugal.mne.gov.pt/pt/temas/objetivos-de-desenvolvimento-sustentavel/os-17-ods/objetivo-de-desenvolvimento-sustentavel-1-erradicar-a-pobreza-em-todas-as-suas-formas-em-todos-os-lugares",
    },

    {
        thumbnail: Ods02,
        url: "https://ods.pt/objectivos/2-acabar-com-a-fome/",
    },

    {
        thumbnail: Ods03,
        url: "https://ods.pt/objectivos/3-vida-saudavel/",
    },

    {
        thumbnail: Ods04,
        url: "https://ods.pt/objectivos/4-educacao-de-qualidade/",
    },

    {
        thumbnail: Ods05,
        url: "https://ods.pt/objectivos/5-igualidade-de-genero/",
    },

    {
        thumbnail: Ods06,
        url: "https://ods.pt/objectivos/6-agua-e-saneamento/",
    },

    {
        thumbnail: Ods07,
        url: "https://ods.pt/objectivos/7-energias-renovaveis/",
    },

    {
        thumbnail: Ods08,
        url: "https://ods.pt/objectivos/8-trabalho-e-crescimento-economico/",
    },

    {
        thumbnail: Ods09,
        url: "https://ods.pt/objectivos/9-inovacao-e-infraestruturas/",
    },

    {
        thumbnail: Ods10,
        url: "https://ods.pt/objectivos/10-reduzir-as-desigualdades/",
    },

    {
        thumbnail: Ods11,
        url: "https://ods.pt/objectivos/11-cidades-e-comunidades-sustentaveis/",
    },

    {
        thumbnail: Ods12,
        url: "https://ods.pt/objectivos/12-producao-e-consumo-sustentaveis/",
    },

    {
        thumbnail: Ods13,
        url: "https://ods.pt/objectivos/13-combater-as-alteracoes-climatericas/",
    },

    {
        thumbnail: Ods14,
        url: "https://ods.pt/objectivos/14-oceanos-mares-e-recursos-marinhos/",
    },

    {
        thumbnail: Ods15,
        url: "https://ods.pt/objectivos/15-ecosistemas-terrestres-biodiversidade/",
    },

    {
        thumbnail: Ods16,
        url: "https://ods.pt/objectivos/16-paz-e-justica/",
    },

    {
        thumbnail: Ods17,
        url: "https://ods.pt/objectivos/17-parcerias-para-o-desenvolvimento/",
    },

];

const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Cards = () => {
    return(
        <ContainerCards>
            {InfoCards.map(item => 
                <Card
                    url={item.url}
                    thumbnail={item.thumbnail}
                />
            )}
        </ContainerCards>
    )
}

export default Cards;