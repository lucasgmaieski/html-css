import { useContext } from "react";
import { Link } from 'react-router-dom';

import { Context } from "../contexts/Context";

export const ShowData = () => {
    const  {state, dispatch}  = useContext(Context)
    return (
        <div>
            {state.user.name && 
                <>
                    <h3>Tela ShowData</h3>
                    MEU NOME É: {state.user.name} <br />
                    EU TENHO {state.user.age} ANOS.
                    <br />
                    <Link to="/">Voltar para SignUp</Link>
                </>
            }
            {!state.user.name && 'Não há informações.'}
            
        </div>
    );
}