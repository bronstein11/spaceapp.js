import styled from "styled-components";
import BotaoIcone from "../../../BotaoIcone";

const ContainerImagem = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;  
    }      
`

const LegendaImagem = styled.figcaption`
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
        font-family: 'GandhiSansBold';
        flex-grow: 1;
        margin: 0;
        font-size: 16px;
    }

        
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
    }
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito}) => {
    
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png";

    return (
        <ContainerImagem $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt=""/>
            <LegendaImagem>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <p>{foto.fonte}</p>
                    <div>
                        <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeFavorito} alt="icone de coração" />
                        </BotaoIcone>
                        {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="icone de expandir imagem" />
                        </BotaoIcone>}
                    </div>

                </Rodape>
            </LegendaImagem>
        </ContainerImagem>
    )
}

export default Imagem;
