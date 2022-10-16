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
        title: "A",
        description: "",
        thumbnail: Ods01,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods02,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods03,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods04,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods05,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods06,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods07,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods08,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods09,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods10,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods11,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods12,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods13,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods14,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods15,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods16,
        url: "",
    },

    {
        title: "A",
        description: "",
        thumbnail: Ods17,
        url: "",
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
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    thumbnail={item.thumbnail}
                />
            )}
        </ContainerCards>
    )
}

export default Cards;