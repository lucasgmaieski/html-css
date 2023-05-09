import { Link, useSearchParams } from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParams( searchParams );
    }
    return (
        <div>
            Filtro: {searchParams.get('filter')}
            <hr />
            <button onClick={()=>setOrder('asc')}>Asc</button>
            <button onClick={()=>setOrder('desc')}>Desc</button>
            <hr />
            Página About
            <ul>
                <li><Link to="/sobre/lucas">Lucas</Link></li>
                <li><Link to="/sobre/luan">Luan</Link></li>
            </ul>
        </div>
    );
}