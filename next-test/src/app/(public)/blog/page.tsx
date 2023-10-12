import { Post } from "@/types/Post";
import Link from "next/link";
import { getPosts } from "./[postId]/services/get-posts";

type Props = {
    name: string;
    posts: Post[];
}

// export async function getData()  {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } });
//     const posts: Post[] = await res.json();

//     return {
//         props: {
//             name: 'Lucas',
//             posts
//         }
//     }
// }

export default async function Blog() {
    const postsBlog: Post[] = await getPosts();
    return (
        <main>
            <h1>Lista de posts do Lucas</h1>
            <ul className="flex flex-col gap-3">
                {postsBlog.map((post, index)=>(
                    <li key={index} className="border border-green-700"><Link href={`blog/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </main>
    )
}