import { useRouter } from "next/navigation"

export default function LoginPage(){
    const router = useRouter
    return (
        <form>
                <h1>Página de usuários</h1>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="">Senha:</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <button type="submit">Entrar</button>
            </div>
        </form>
    )
}