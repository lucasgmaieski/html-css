import { useEffect, useState } from 'react';
import * as C from './styles';
import { loadPosts } from '../../helpers/helper';


export const Album = () => {
    const [posts, setPosts] = useState();
    useEffect(() => {
      loadPosts();
    },[]);
  

    return (
        <C.AlbumList>
            { }
            <div>album x</div>
            <div>album x</div>
            <div>album x</div>
            <div>album x</div>
            <div>album x</div>
            <div>album x</div>
        </C.AlbumList>
    );
}