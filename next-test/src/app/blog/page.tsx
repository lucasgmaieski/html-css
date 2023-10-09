import { Post } from "@/types/Post";
import Link from "next/link";

type Props = {
    name: string;
    posts: Post[];
}

export const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } });
    const posts: Post[] = await res.json();

    return {
        props: {
            name: 'Lucas',
            posts
        }
    }
}

export default async function Blog() {
    const propsBlog = await getData();
    return (
        <main>
            <h1>Lista de posts do {propsBlog.props.name}</h1>
            <ul className="flex flex-col gap-3">
                {propsBlog.props.posts.map((post, index)=>(
                    <li key={index} className="border border-green-700"><Link href={`blog/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </main>
    )
}