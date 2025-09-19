import styled from "styled-components";


const Rodape = styled.footer`
    width: 100%;
    height: 80px;
    margin-top: 5em;
    background-color: #04244F;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AutorParagrafo = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: "GandhiSansRegular";
    margin-right: 2em;
`

const ContainerIcones = styled.div`
    margin-left: 2em;
    display: flex;
    align-items: center;
    gap: 1.5em;
`

const BotaoIcone = styled.a`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const Footer = () => {
    return (
        <Rodape>
            <ContainerIcones>
                <BotaoIcone href="https://www.facebook.com/mauricio.bronstein.1">
                    <img src="../../../public/icones/facebook.png" alt="icone do facebook"></img>
                </BotaoIcone>
                <BotaoIcone href="#">
                    <img src="../../../public/icones/twitter.png" alt="icone do twitter"></img>
                </BotaoIcone>
                <BotaoIcone href="https://www.instagram.com/bronstein_02">
                    <img src="../../../public/icones/instagram.png" alt="icone do instagram"></img>
                </BotaoIcone>
            </ContainerIcones>
            <div>
                <AutorParagrafo>Desenvolvido por Mauricio Bronstein.</AutorParagrafo>
            </div> 
        </Rodape>   
    )

}

export default Footer;