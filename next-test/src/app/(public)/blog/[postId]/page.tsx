import { Post } from "@/types/Post";
import { Metadata } from "next";
import { getPosts } from "./services/get-posts";
import { getPostById } from "./services/get-post-by-id";

type Props = {
    params: {
        postId: string;
    };
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const post = await getPostById(params.postId);

    return {
        title: `${post.title}`,
        description: `Descrição do Post ${post.title}`,
    }
}

// export async function getPostData(id: string): Promise<Post> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const post = await res.json();
//     return post;
// }

export default async function BlogPost({params}: Props) {
    // const {slug, postId } = params;
    const post = await getPostById(params.postId);

    return(
        <main>
            <h1>Título blog: {post.title}</h1>
            <p>{post.body}</p>
        </main>
    )
}

export async function generateStaticParams() {
    const posts: Post[] = await getPosts();
    const postsIds = posts.map((post) => ({
        postId: post.id.toString()
    }));

    return postsIds;
}