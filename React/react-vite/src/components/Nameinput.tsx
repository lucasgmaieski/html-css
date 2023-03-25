import React, { useState } from "react";

export const Nameinput = () => {
    const[name, setName] = useState('Lucas');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName( event.target.value );
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleInput} />
            <hr />
            Seu nome é: {name}
        </div>
    )
}