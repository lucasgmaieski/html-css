import { useState } from "react";

export const Contador = () => {
    const [n, setN] = useState(0);

    const handleMinus = () => {
        setN(n - 1);
    }
    const handleMore = () => {
        setN(n + 1);
    }
    return (
        <div>
            <button onClick={handleMinus}>-</button>
            <div>{n}</div>
            <button onClick={handleMore}>+</button>
        </div>
    );
}

