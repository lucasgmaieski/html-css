import styled from "styled-components";

type MainProps ={
    bgMain: string;
}
export const Main = styled.div<MainProps>`
    max-width:990px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.bgMain};
    span {
        color:#000;
        margin: 20px;
    }
`;

export const Header = styled.header`
    border-bottom: 1px solid #fff;
    background-color: #637081;
`;

type BotaoProps = {
    bg: string;
    small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '15px' : '30px' };
    background-color: ${props => props.bg };
`;