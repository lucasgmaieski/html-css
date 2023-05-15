import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { api } from "../api";
import { Photo } from "../types/Photo";
import { PhotoItem } from "../components/PhotoItem";

export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState({id: 0, title: '', userId: 0});

    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photos = await api.getPhotosFromAlbum(id);
        setList( photos );
        setLoading(false);
    }

    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await api.getAlbum(id);
        setAlbumInfo(albumInfo);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBackButton}>Voltar</button>

            {loading && "Carregando..."}

            <h1>{albumInfo.title}</h1>

            {list.map((item, index) => (
                <PhotoItem 
                    key={index}
                    data={item}
                />
            ))}
        </div>
    );
}