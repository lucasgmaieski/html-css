import { useEffect, useState } from 'react';
import { api } from '../api';
import { Album } from '../types/Album';
import { AlbumItem } from '../components/AlbumItem';

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Album[]>([])
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAlbums();
        setList( albums );
        setLoading(false);
    }
    const handleLoadMore = () => {
        setPage(page + 1);
    }
    return  (
        <div>
            {loading && "Carregando..."}

            {list.filter(index => (index.id <= page * 9)).map((item, index) => (
                <AlbumItem
                    key={index}
                    id={item.id}
                    title={item.title}
                />
            ))}
            <button onClick={handleLoadMore}>Carregar Mais</button>
        </div>
    )
}