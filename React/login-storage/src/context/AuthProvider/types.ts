export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>; // método para fazer autenticação que não vai retornar nada por isso <void>
    logout: () => void; // método para fazer logout
}

export interface IAuthProvider {
    children: JSX.Element;
}