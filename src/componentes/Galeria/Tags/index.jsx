import styled from "styled-components";
import tags from "./tags.json";

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const BotaoEstilizado = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    &:first-of-type {
        margin-left: 3rem;
    }
`

const TagContainer = styled.section`
    display: flex;
    margin-block: 66px 48px;
    font-size: 18px;
    gap: 24px; 
    align-items: center;
`

const Tags = ({setTag}) => {
    return <>
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => <BotaoEstilizado key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</BotaoEstilizado>)}
        </TagContainer>
    </>
}

export default Tags;