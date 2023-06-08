import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        console.log('entra no validateToken da api');
        //retorna uma resposta fake da api
        return {
            user: { id: 3, name: 'Lucas', email: 'lucas@gmail.com'}
        };
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signin: async (email: string, password: string) => {
        console.log('entra no signin da api');
        //retorna uma resposta fake da api
        return {
            user: { id: 3, name: 'Lucas', email: 'lucas@gmail.com'},
            token: '123456789'
        };
        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    signout: async () => {
        console.log('entra no signout da api');

        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
})