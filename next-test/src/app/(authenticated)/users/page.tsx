import { getUsers } from "@/app/(public)/login/services/get-users";
import Link from "next/link";

export default async function UsersPage(){
    const users = await getUsers();
    return (
        <div>
            <h2>Usuários</h2>
            <ul>
                {users.map((user: any) => 
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.first_name} {user.last_name} ({user.email})</Link>
                    </li>)
                }
                
            </ul>
        </div>
    )
}