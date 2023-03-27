import { useState } from "react";

export const Mostrar = () => {
    const[show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
    return(
        <>
            <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
            {/* renderização condicional */}
            {show === true && 
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
            }
            
        </>
    );
}