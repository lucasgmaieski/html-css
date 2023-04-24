import { useContagem } from "../reducers/Contagem";

export const ReducerContador = () => {
    const [contagem, contagemDispatch] = useContagem();
    return (
        <div>
            Contagem: {contagem.count}
            <hr />
            <button onClick={()=>contagemDispatch({type: 'ADD'})}>Adicionar</button>
            <button onClick={()=>contagemDispatch({type: 'DEL'})}>Remover</button>
            <button onClick={()=>contagemDispatch({type: 'RESET'})}>Resetar</button>
        </div>
    );
}