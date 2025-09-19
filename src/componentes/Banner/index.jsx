import styled from "styled-components";
import bannerImagem from "./banner.png";

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const ContainerImagem = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    background-image: url(${bannerImagem});

`

const Banner = ({texto}) => {
    return (
        <ContainerImagem>
            <TituloEstilizado>A galeria mais completa de fotos do espaço!</TituloEstilizado>
        </ContainerImagem>
    ) 
}

export default Banner;