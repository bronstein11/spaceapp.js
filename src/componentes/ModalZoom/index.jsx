import styled from "styled-components";
import Imagem from "../Galeria/Tags/Imagem";
import iconeFechar from "../../../public/icones/fechar.png";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    display: flex;
    position: absolute;
    top: 294px;
    background-color: transparent;
    border: none;
    width: 1156px;
    justify-content: center;
    form {
        button {
            position: absolute;
            right: 5.5em;
            top: 2.5em;
        }
    }

`


const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito}) => {
    
    return (<>
        {foto && <>
            <Overlay/>
            <DialogEstilizado open={!!foto} onClose={aoFechar}>
                <Imagem 
                    foto={foto} 
                    expandida={true}
                    aoAlternarFavorito={aoAlternarFavorito}
                />
                <form method="dialog">
                    <BotaoIcone formMethod="dialog" onClick={aoFechar}>
                        <img src={iconeFechar} alt="icone de fechar"/>
                    </BotaoIcone>
                </form>

            </DialogEstilizado>
        </>}
    </>)
}

export default ModalZoom;