import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() =>{
        //carregar o estado quando o provider for montado
        const user = getUserLocalStorage();

        if(user) {
            setUser(user); // se tiver usuario armazenado atualiza o estado no usuario no contexto
        }
    }, [])


    async function authenticate (email: string, password: string) {
        const response = await LoginRequest(email, password);

        const payload = {token: response.token, email};

        setUser(payload);
        setUserLocalStorage(payload); // armazena as infos no localStorage
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null); // zera o localStorage
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}