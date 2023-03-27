import { useState } from 'react';

type Props = {
    text: string;
    clickFn: (txt: string) => void;
}

export const Botao = ({ text, clickFn}: Props) => {
    const[clicked, setClicked] = useState(false);

    const handleClick = () => {
        clickFn("Frase")
        setClicked(true);
    }
    return (
        <button style={{backgroundColor: clicked ? 'orangered' : 'blue', color:'#fff'}} onClick={handleClick}>{text}</button>
    )
}