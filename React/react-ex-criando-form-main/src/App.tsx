import React, { useState } from "react";

const App = () => {

    const[name, setName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }
    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    }

    return (
        <div>
            <div>
                Nome:
                <input type="text" value={name} onChange={handleName}/>
            </div>

            <div>
                Sobrenome:
                <input type="text" value={lastName} onChange={handleLastName}/>
            </div>

            <div>
                Idade:
                <input type="text" value={age} onChange={handleAge}/>
            </div>

            <hr/>

            Olá {`${name} ${lastName}`}, tudo bem?<br/>
            Você tem {age} anos.
        </div>
    );
}

export default App;