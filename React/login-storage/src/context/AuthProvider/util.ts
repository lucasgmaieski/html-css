import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage (user: IUser | null) {
    //localStorage armazena sempre json por isso tem que converter
    localStorage.setItem('u', JSON.stringify(user)); // armazenar o user no localStorage
}
export function getUserLocalStorage () {
    const json = localStorage.getItem('u'); // pega o user que esta armazenado no localStorage

    // se não tem usuario armazenado retorna null
    if(!json) {
        return null;
    }
    // recebe a informação do localStorage e converte novamente para
    const user = JSON.parse(json);

    return user ?? null; //retorna null caso o objeto venha quebrado
}

// LocalStorage é como se fosse um banco de dados do Browser
export async function LoginRequest (email: string, password: string) {
    try {
        const request = await Api.post("login", {email, password});

        return request.data;
    } catch (error) {
        return null;
    }
}