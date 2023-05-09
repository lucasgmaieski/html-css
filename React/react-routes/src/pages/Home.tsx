import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            Página Home - <Link to="/sobre">Ir para SOBRE</Link>
        </div>
    );
}