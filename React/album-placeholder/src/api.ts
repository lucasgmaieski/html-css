import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAllAlbums: async () => {
        let response = await axios.get(`${BASE}/albums`);
        return response.data;
    },
    getAlbum: async (albumId: number) => {
        let response = await axios.get(`${BASE}/albuns/${albumId}`);
        return response.data;
    },
    getPhoto: async (photoId: number) => {
        let response = await axios.get(`${BASE}/photos/${photoId}`);
        return response.data;
    }
}