import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
export const api = {
    getAlbums: async () => {
        const response = await request(`/albums`);
        return response.data;
    },
    getAlbum: async (id: string) => {
        const response = await request(`/albums/${id}`);
        return response.data;
    },
    getPhotosFromAlbum: async (id: string) => {
        const response = await request(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        const response = await request(`/photos/${id}`);
        return response.data;
    }
}