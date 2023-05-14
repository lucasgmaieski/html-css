import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState({id: 0, title: '', userId: 0});


    return (
        <div>
            
        </div>
    );
}