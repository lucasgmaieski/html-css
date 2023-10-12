import { getUserById } from "@/app/(public)/login/services/get-user-by-id"
import { Metadata } from "next";
import OtherUsers from "./components/other-users";
import { getUsers } from "@/app/(public)/login/services/get-users";

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

export async function generateStaticParams() {
    const users = await getUsers();
    const usersIds = users.map((user: any)=> ({userId: user.id.toString()}));
    return usersIds;
}

export default async function UserDetailsPage({params}: {params: {userId: string}}) {
    const user = await getUserById(params.userId);

    return <>
        <h2>Usuário: {user.first_name} {user.last_ame}</h2>
        <span>{user.email}</span>
        <hr className="h-[2px] bg-slate-400"/>
        <h2>Outros Usuários</h2>
        <OtherUsers currentUserId={params.userId}></OtherUsers>
    </>
}