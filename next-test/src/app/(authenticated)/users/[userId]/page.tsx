import { getUserById } from "@/app/(public)/login/services/get-user-by-id"
import { Metadata } from "next";

type Props = {
    params: {
        userId: string;
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const user = await getUserById(params.userId);
    return {
        title: `${user.first_name} - Usuários - Sistema Olá Mundo`,
        description: params.userId,
    }
}

export default async function UserDetailsPage({params}: {params: {userId: string}}) {
    const user = await getUserById(params.userId);

    return <>
        <h2>Usuário: {user.first_name} {user.last_ame}</h2>
        <span>{user.email}</span>
    </>
}