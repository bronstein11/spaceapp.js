import styled from "styled-components";
import Titulo from "../../Titulo";
import FotosPopulares from "./fotos-populares.json";

const ContainerPopulares = styled.section`
    
`

const ListaFotosPopulares = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

const ItemLista = styled.li`
    list-style: none;
`

const ImagemEstilizada = styled.img`
    max-width: 212px;
    height: 158px;
    border-radius: 20px;
`

const BotaoVerMais = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 20px;
    border-radius: 10px;
    border-color: #C98CF1;
    width: 212px;
    height: 52px;
    padding: 24px;
    color: #FFFFFF;
    font-family: "GandhiSansBold";
    justify-content: center;
    margin-left: 2em;
`

const Populares = () => {
    return  (
        <>
            <ContainerPopulares>
                <Titulo $alinhamento="center">Populares</Titulo>
                <ListaFotosPopulares>
                    {FotosPopulares.map(fotoPopular => <ItemLista key={fotoPopular.id}><ImagemEstilizada src={fotoPopular.path}  alt={fotoPopular.alt}/></ItemLista>)}
                </ListaFotosPopulares>
                <BotaoVerMais>Ver Mais</BotaoVerMais>
            </ContainerPopulares>

        </>

    )
}

export default Populares;